import mongoose from "mongoose";

const immunizationsSchema = new mongoose.Schema({
    date:Date,
    patientid:String,
    encounterid:String,
    code:Number,
    description:String,
    baseCost:mongoose.Types.Decimal128
});

export default mongoose.model('Immunizations',immunizationsSchema);


// {
//     "date":"",
//     "patientid":"",
//     "encounterid":"",
//     "code":0,
//     "description":"",
//     "baseCost":0
// }