const mongoose=require('mongoose');
const { Schema } = mongoose;

const UserSchema= new Schema({
   name:{
     required:true,
      type:String
   },
  mobile:{
    unique:true,
    type:String
  },
  email:{
    unique:false,
    type:String
  },
  password:{
    required:true,
    type:String
  },
  username:{
    type:String,
    required:true
  },
  
})
mongoose.models={}
module.exports = UserSchema
