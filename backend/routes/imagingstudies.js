import { Router } from "express";
import Patients from "../models/Patients.js";
import Encounters from "../models/Encounters.js";
import ImagingStudies from "../models/ImagingStudies.js";

const imagingstudiesData = Router();

imagingstudiesData.post('/insert',async(req,res) => {
    const imagingstudie = new ImagingStudies(req.body);
    try{
        await imagingstudie.save().then(
            async data => {
                await Encounters.findOneAndUpdate(
                    {id:data.encounterid},
                    {$set:{imagingstudie:data._id}}
                )

                return Patients.findOneAndUpdate(
                    {id:data.patientid},
                    {$push:{imagingstudies:data._id}},
                    { new: true, useFindAndModify: false }
                )
            }
        );
        res.status(201).send({
            "success":true,
        })
    }catch(err){
        res.send({
            "success":false,
            "message":err.msg
        });
    }
})

export default imagingstudiesData;