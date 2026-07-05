import mongoose from "mongoose";
 const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"Username is required"],
        unique: [true,"USername must be unqiue"]
    },
    email:{
        type:String,
        required : [true,"Email is required"],
        unique : [true,"Email must be unique"]
    },
    password:{
        type: String,
        required : [true,"Password is required"]
    },
    verified:{
        type:Boolean,
        default: false
    }
 })
 const userModel = mongoose.model("users",userSchema)
 export default userModel;