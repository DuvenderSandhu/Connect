const mongoose=require('mongoose');
const { Schema } = mongoose;

const MessageSchema= new Schema({
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
  address:{
    type:String,
    default:""
  },
  
})
mongoose.models={}
module.exports = MessageSchema
