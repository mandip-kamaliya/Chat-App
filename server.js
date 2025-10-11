import express from "express";
import "dotenv/config";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { Server } from "socket.io";


const PORT = process.env.PORT || 5000;
const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
})

io.on("connection",(socket)=>{
    console.log("A new user just joined",socket.id);

    socket.on("chat message",(msg)=>{
        console.log("message",msg);
        io.emit("chat message",msg);
    });

    socket.on("disconnect",()=>{
        console.log("user disconnected");
    });
});

httpServer.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`);
});