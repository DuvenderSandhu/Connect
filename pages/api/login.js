import UserSchema from '../../Backend/Schema/UserSchema';
import connectToMongo from '../../Backend/Middleware/connectToMongo'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import mongoose from 'mongoose'
const User = mongoose.model('User', UserSchema)
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try{
      await connectToMongo()
  let account= await User.find({username:req.body.username.toLowerCase()}).select('-password')
  if(account.length===0){
    
    res.json({status:"error",alert:"Invalid Credentials"})
  }
  else{
      let result= await User.find({username:req.body.username.toLowerCase()})
        let data= await bcrypt.compare(req.body.password,result[0].password)
    if(data){
      let sendData={
        username:result[0].username,
        name:result[0].name,
        friends:result[0].friends
      }
      let token= jwt.sign(sendData,process.env.JWT_TOKEN)
      res.json({status:"ok",username:result[0].username,name:result[0].name,token})
    }
    else{
          res.json({status:"error",alert:"Invalid Credentials"})
    }
  }
    }
    catch(e){
      res.json({status:"error",error:e})
    }
  }
  else{
      await connectToMongo()
    let users= await User.find()
    res.json(users)
  }
}