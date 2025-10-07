import express from "express";
import { configDotenv } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 5000;
const app = express();



app.get("/Chat-App",(req,res)=>{
    res.sendFile(__dirname,"public","index.html");
})

app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`);
})