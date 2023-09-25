const mongoose=require('mongoose');
const { Schema } = mongoose;

const MessageSchema= new Schema({
   message:{
     type:Array,
     required:true
   },
  sender:{
  type:String,
  required:true
  },
  receiver:{
  type:String,
  required:true
  }
  
})
mongoose.models={}
module.exports = MessageSchema
