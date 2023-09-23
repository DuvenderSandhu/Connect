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
  let account= await User.find({username:req.body.username}).select('-password')
  if(account.length===0){
    
    res.json({status:"error",alert:"Invalid Credentials"})
  }
  else{
      let result= await User.find({username:req.body.username})
        let data= await bcrypt.compare(req.body.password,result[0].password)
    if(data){
      res.json(result)
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