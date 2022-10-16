import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    id:String,
    birthDate:Date,
    deathDate:Date,
    SSN:String,
    driversLicence:String,
    passport:String,
    prefix:String,
    first:String,
    last:String,
    suffix:String,
    maiden:String,
    race:String,
    ethnicity:String,
    gender:String,
    birthplace:String,
    address:String,
    city:String,
    state:String,
    country:String,
    zip:String,
    latitude:mongoose.Types.Decimal128,
    longitude:mongoose.Types.Decimal128,
    healthCareExpenses:mongoose.Types.Decimal128,
    healthCareCoverage:mongoose.Types.Decimal128,
    income:Number,
    encounters:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Encounters"
    }],
    immunizations:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Immunizations"
    }],
    conditions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Conditions"
    }],
    allergies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Allergies"
    }],
    devices:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Devices"
    }],
    imagingStudies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ImagingStudies"
    }],
    observations:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Observations"
    }],
    carePlans:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CarePlans"
    }],
    procedures:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Procedures"
    }],
    supplies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplies"
    }],
    medications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Medications"
    }]
})

export default mongoose.model('Patient',patientSchema);


// {
//     "id":"51fb4510-90a9-81c3-1b04-8e9e89c0486f",
//     "birthDate":"2010-02-09",
//     "deathDate":"",
//     "SSN":"",
//     "driversLicence":"",
//     "passport":"",
//     "prefix":"",
//     "first":"",
//     "last":"",
//     "suffix":"",
//     "maiden":"",
//     "race":"",
//     "ethnicity":"",
//     "gender":"",
//     "birthplace":"",
//     "address":"",
//     "city":"",
//     "state":"",
//     "county":"",
//     "zip":12,
//     "latitude":0,
//     "longitude":0,
//     "healthCareExpenses":0,
//     "healthCareCoverage":0,
//     "income":0,
// }




// {
//     "id":"51fb4510-90a9-81c3-1b04-8e9e89c0486f",
//     "birthDate":"2010-02-09",
//     "deathDate":"",
//     "SSN":"999-57-2606",
//     "driversLicence":"",
//     "passport":"",
//     "prefix":"",
//     "first":"Cecilia788",
//     "last":"Balistreri607",
//     "suffix":"",
//     "maiden":"",
//     "race":"white",
//     "ethnicity":"nonhispanic",
//     "gender":"F",
//     "birthplace":"Westborough  Massachusetts  US",
//     "address":"384 Hamill Frontage road Unit 70",
//     "city":"Worcester",
//     "state":"Massachusetts",
//     "county":"Worcester County",
//     "zip":"01607",
//     "latitude":42.27268735723383,
//     "longitude":-71.75055520793127,
//     "healthCareExpenses":39611.41,
//     "healthCareCoverage":16746.42,
//     "income":11317
// }