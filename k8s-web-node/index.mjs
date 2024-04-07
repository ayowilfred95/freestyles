import express from "express";
import os from "os";

const app = express();

const PORT = 4000

app.get('/', (req,res)=>{
    const helloMessage = `VERSION 2: Hello from the ${os.hostname()}, this is version:2 of our kubernets app`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT,()=>{
    console.log(`Web server listening at port ${PORT}`)
})
