import connectDB from "./db/index.js";
import express from "express";

const app = express()

const port = process.env.PORT || 4000


connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log("app running on",port)
      })
      app.get('/', (req, res) => {
        res.send('Hello World!')
      })
      app.on("error",(err)=>{
        console.error(err);
        
      })
})
.catch((err)=>{
console.log("server not runnning",err)
})
