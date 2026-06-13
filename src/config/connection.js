import mongoose from "mongoose";

const dbconnection = async()=>{
    try{
        const connection = await mongoose.connect(process.env.Mongo_URI);
        console.log("Mongodb connected successfully")
    }
    catch(error){
        console.error("Mongodb connection failed",error);
        process.exit(1);
    }
    
}
export default dbconnection;