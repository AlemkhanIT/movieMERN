import express from "express";
import mongoose from "mongoose";
import { Movie } from "./models/movieModel.js";
import dotenv from "dotenv"
dotenv.config({ path: '../.env' });

const app = express();

app.get('/',(req,res) => {
    console.log(req);
    return res.status(234).send("App is running");
});

//Route for save movie

mongoose
    .connect(process.env.DB)
    .then(()=>{
        console.log("App is connected to database");
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to ${process.env.PORT}`);
        });
    })
    .catch((e)=>{
        console.log(e);
    });