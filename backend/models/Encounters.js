import mongoose from "mongoose";

const encountersSchema = new mongoose.Schema({
    id:String,
    start:Date,
    stop:Date,
    patientid:String,
    organizationid:String,
    providerid:String,
    payerid:String,
    encounterClass:String,
    code:Number,
    description:String,
    baseEncounterCost:mongoose.Types.Decimal128,
    totalClaimCost:mongoose.Types.Decimal128,
    payerCoverage:mongoose.Types.Decimal128,
    reasonCode:Number,
    reasonDescription:String,
    immunization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Immunizations"
    },
    condition:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Conditions"
    },
    allergie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Allergies"
    },
    device:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Devices"
    },
    imagingStudie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ImagingStudies"
    },
    observation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Observations"
    },
    carePlan:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CarePlans"
    },
    procedure:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Procedures"
    },
    supplie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplies"
    },
    medication:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Medications"
    }
})


export default mongoose.model('Encounters',encountersSchema);



// {
//     "id":"",
//     "start":"",
//     "stop":"",
//     "patientid":"",
//     "organizationid":"",
//     "providerid":"",
//     "payerid":"",
//     "encounterClass":"",
//     "code":"",
//     "description":"",
//     "baseEncounterCost":0,
//     "totalClaimCost":0,
//     "payerCoverage":0,
//     "reasonCode":0,
//     "reasonDescription":""
// }