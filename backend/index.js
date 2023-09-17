import express from "express";
import mongoose from "mongoose";
import movieRoutes from "./routes/movieRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: './.env' });

const app = express();

app.use(express.json());

//Connecting with Frontend (CORS)
app.use(cors());
/*app.use(
    cors({
        origin:'http://localhost:3000',
        methods: ['GET', 'POST','PUT', 'DELETE'],
        allowedHeaders:['Content-Type']
    })
)*/

app.get('/',(req,res) => {
    console.log(req);
    return res.status(234).send("App is running");
});

app.use('/movies', movieRoutes);

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