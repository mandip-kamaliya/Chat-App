import express from "express";
import "dotenv/config";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 5000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
})

app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`);
})