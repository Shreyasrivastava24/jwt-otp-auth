import mongoose from "mongoose";
import dns from "dns";
import config from "./config.js";

dns.setServers(['8.8.8.8', '1.1.1.1']);

async function connectDB(){
    await mongoose.connect(config.MONGO_URI)
    console.log("Connected to db")
}
export default connectDB;