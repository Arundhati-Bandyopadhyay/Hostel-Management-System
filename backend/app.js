const express=require('express');
const dotenv=require('dotenv');
require("dotenv").config();
const app=express();
require('./model/db');
const bodyParser=require('body-parser')
app.use(bodyParser.json( ));
const path=require("path");
dotenv.config({path:"./.env"})

app.use(express.urlencoded({extended:true}))

//router import
 const apiroute=require('./Router/route')
app.use("/api",apiroute);

//connection
const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log(`server running  at port no ${port}`);
})