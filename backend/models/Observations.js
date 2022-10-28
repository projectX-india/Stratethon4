import mongoose from "mongoose";

const observationsSchema = new mongoose.Schema({
    date:Date,
    patientid:String,
    encounterid:String,
    category:String,
    code:String,
    description:String,
    value:Number,
    units:String,
    type:String
})

export default mongoose.model('Observations',observationsSchema);


// {
//     "date":"Date",
//     "patientid":"String",
//     "encounterid":"String",
//     "category":"String",
//     "code":0,
//     "description":"String",
//     "value":0,
//     "units":"String",
//     "type":"String"
// }