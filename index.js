const express=require("express");
require("dotenv").config();
const app=express();
const port =3000;
const dataBase=require("./src/connect")
app.use(express.json());
const start = async ()=>{
    try{
        await dataBase(process.env.MONGOLINK);
        app.listen(port);

    } catch (e) {
        
    }
}

start();