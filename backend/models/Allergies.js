import mongoose from "mongoose";

const allergiesSchema = new mongoose.Schema({
    start:Date,
    stop:Date,
    patientid:String,
    encounterid:String,
    code:Number,
    description:String,
    type:String,
    category:String,
    reaction1:Number,
    description1:String,
    severity1:String,
    reaction2:Number,
    description2:String,
    severity2:String
})

export default mongoose.model('Allergies',allergiesSchema);


// {
//     "start":"Date",
//     "stop":"Date",
//     "patientid":"String",
//     "encounterid":"String",
//     "code":0,
//     "description":"String",
//     "type":"String",
//     "category":"String",
//     "reaction1":0,
//     "description1":"String",
//     "severity1":"String",
//     "reaction2":0,
//     "description2":"String",
//     "severity2":"String"
// }