//COMO Y EL DONDE SE GUARDAN LOS DATOS
import mongooose, {Schema, model} from "mongoose";

const alumnoSchema = new Schema({
    name:{
        type:String
    },
    Edad:{
        type:Number
    }
})
export const alumnoModel = new model("Tabla de alumnos", alumnoSchema)