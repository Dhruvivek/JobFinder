import express from "express";
import dbconnection from "./src/config/connection.js";
import dotenv from "dotenv";
import cors from "cors";
import dns from "dns";

dns.setServers(["1.1.1.1"],["8.8.8.8"]);



dotenv.config();


const app = express();

app.use(cors);
app.use(express.json());

dbconnection();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
});