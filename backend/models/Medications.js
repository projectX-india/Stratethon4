import mongoose from "mongoose";

const medicationsSchema = new mongoose.Schema({
    start:Date,
    stop:Date,
    patientid:String,
    payerid:String,
    encounterid:String,
    code:Number,
    description:String,
    basecost:mongoose.Types.Decimal128,
    payercoverage:mongoose.Types.Decimal128,
    dispenses:mongoose.Types.Decimal128,
    totalcost:mongoose.Types.Decimal128,
    reasoncode:Number,
    reasondescription:String
})

export default mongoose.model('Medications',medicationsSchema);


// {
//     "start":"Date",
//     "stop":"Date",
//     "patientid":"String",
//     "payerid":"String",
//     "encounterid":"String",
//     "code":0,
//     "description":"String",
//     "basecost":0,
//     "payercoverage":0,
//     "dispenses":0,
//     "totalcost":0,
//     "reasoncode":0,
//     "reasondescription":"String"
// }