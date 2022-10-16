import mongoose from "mongoose";

const careplansSchema = new mongoose.Schema({
    id:String,
    start:Date,
    stop:Date,
    patientid:String,
    encounterid:String,
    code:Number,
    description:String,
    reasoncode:Number,
    reasondescription:String
})

export default mongoose.model('CarePlans',careplansSchema);


// {
//     "id":"String",
//     "start":"Date",
//     "stop":"Date",
//     "patientid":"String",
//     "encounterid":"String",
//     "code":0,
//     "description":"String",
//     "reasoncode":0,
//     "reasondescription":"String"
// }