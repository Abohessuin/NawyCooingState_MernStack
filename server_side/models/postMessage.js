import mongoose from "mongoose";


const postSchema = mongoose.Schema({
  Formtitle:String,
  Image: String,
  Description: String,
  name: String,
  Phone: String,
  Email: String,
  calltime: String,
  propertyType: String,

});

const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
