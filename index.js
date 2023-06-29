const express=require("express");
require("dotenv").config();
const app=express();

const dataBase=require("./src/connect")

const userRouter = require('./src/user_route');

const notFoundMiddleware = require('./src/middlewares/not-found');
const errorHandlerMiddleware = require('./src/middlewares/error-handler');

app.use(express.json());

app.use('/api/v1', userRouter);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port =3000;

const start = async ()=>{
    try{
        await dataBase(process.env.MONGOLINK);
        app.listen(port);

    } catch (e) {
        
    }
}

start();