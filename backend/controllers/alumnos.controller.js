import { alumnoModel } from "../models/alumnos.model.js";

alumnoModel.create({
    Name:"Rodolfo",
    edad:25
})

export const test = ()=>{
    console.log("Funciona el controlador")
}