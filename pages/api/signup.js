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
  let account= await User.find({username:req.body.username})
  if(account.length===0){
    let users= await User.create({name:req.body.name,username:req.body.username,mobile:req.body.mobile,email:req.body.email,password:await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))})
    res.json({status:"ok",alert:"User Created"})
  }
  else{
    res.json({status:"error",alert:"Duplicate Username"})
    
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