const mongoose=require("mongoose")
const connectDb=(urlString)=>mongoose.connect(urlString);
module.exports=connectDb