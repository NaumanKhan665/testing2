
//app.js

const express=  require('express');
const mongoose=require("mongoose")
const connectDB=require("./config/db")
const cors=require('cors')
const app=express();
const booksRouter=require("./routes/api/books")


connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use('/books',booksRouter)


app.get('/',(req,res)=>res.send("Helo world"));

const port=process.env.PORT||8082

app.listen(port,()=>console.log("server started on port",port));