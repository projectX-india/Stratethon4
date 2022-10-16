import mongoose from "mongoose";

const proceduresSchema = new mongoose.Schema({
    start:Date,
    stop:Date,
    patientid:String,
    encounterid:String,
    code:Number,
    description:String,
    basecost:mongoose.Types.Decimal128,
    reasoncode:Number,
    reasondescription:String
})

export default mongoose.model('Procedures',proceduresSchema);

// {
//     "start":"Date",
//     "stop":"Date",
//     "patientid":"String",
//     "encounterid":"String",
//     "code":0,
//     "description":"String",
//     "basecost":0,
//     "reasoncode":0,
//     "reasondescription":"String"
// }