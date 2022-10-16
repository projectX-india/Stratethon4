import mongoose from "mongoose";

const suppliesSchema = new mongoose.Schema({
    date:Date,
    patientid:String,
    encounterid:String,
    code:Number,
    description:String,
    quantity:Number
})

export default mongoose.model('Supplies',suppliesSchema);

// {
//     "date":"Date",
//     "patientid":"String",
//     "encounterid":"String",
//     "code":0,
//     "description":"String",
//     "quantity":0
// }