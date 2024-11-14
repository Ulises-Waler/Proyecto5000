import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { test } from "./Backend/Controllers/alumno.controllers.js";

dotenv.config()
mongoose.connect(process.env.db)
    .then(() => {
        console.log("Funciona la base de datos")
    })
    .catch((error) => {
        console.log("No jala la base de datos xdxdxdxddd", error)
    })

const app = express();
app.use(cors());
app.listen(4000, ()=> {
    console.log("Servidor escuchado en el puerto 4000")
})

test()

