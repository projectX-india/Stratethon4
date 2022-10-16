import mongoose from "mongoose";

const imagingstudiesSchema = new mongoose.Schema({
    id:String,
    date:Date,
    patientid:String,
    encounterid:String,
    seriesudi:String,
    bodysitecode:Number,
    bodysitedescription:String,
    modalitycode:String,
    modalitydescription:String,
    instanceid:String,
    sopcode:String,
    sopdescription:String,
    procedurecode:Number
});

export default mongoose.model('ImagingStudies',imagingstudiesSchema);


// {
//     "id":"String",
//     "date":"Date",
//     "patientid":"String",
//     "encounterid":"String",
//     "seriesudi":"String",
//     "bodysitecode":0,
//     "bodysitedescription":"String",
//     "modalitycode":"String",
//     "modalitydescription":"String",
//     "instanceid":"String",
//     "sopcode":"String",
//     "sopdescription":"String",
//     "procedurecode":0
// }