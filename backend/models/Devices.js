import mongoose from "mongoose";

const devicesSchema = new mongoose.Schema({
    start:Date,
    stop:Date,
    patientid:String,
    encounterid:String,
    code:Number,
    description:String,
    udi:String
})

export default mongoose.model('Devices',devicesSchema);

// {
//     "start":"Date",
//     "stop":"Date",
//     "patientid":"String",
//     "encounterid":"String",
//     "code":0,
//     "description":"String",
//     "udi":"String"
// }