import mongoose from "mongoose";

const conditionsSchema = new mongoose.Schema({
    start:Date,
    stop:Date,
    patientid:String,
    encounterid:String,
    code:Number,
    description:String
});

export default mongoose.model('Conditions',conditionsSchema);


// {
//     "start":"",
//     "stop":"",
//     "patientid":"",
//     "encounterid":"",
//     "code":0,
//     "description":""
// }