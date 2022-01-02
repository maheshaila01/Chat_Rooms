const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

dotenv.config();
const app = express();

app.get('/',(req,res)=>{
    res.send("API is running");
});

app.get('/api/chat',(req,res) => {
     res.send(chats);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log("Server start ho gaya"));