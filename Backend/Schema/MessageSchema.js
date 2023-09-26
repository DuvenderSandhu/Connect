const mongoose=require('mongoose');
const { Schema } = mongoose;

const MessageSchema= new Schema({
   message:{
     type:String,
     required:true
   },
  sender:{
  type:String,
  required:true
  },
  receiver:{
  type:String,
  required:true
  },
  timestamp:{
    type:Date,
    default: new Date().getTime()
  }
  
})
mongoose.models={}
module.exports = MessageSchema
