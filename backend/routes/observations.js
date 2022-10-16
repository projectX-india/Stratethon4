import { Router } from "express";
import Patients from "../models/Patients.js";
import Encounters from "../models/Encounters.js";
import Observations from "../models/Observations.js";

const observationsData = Router();

observationsData.post('/insert',async(req,res) => {
    const observation = new Observations(req.body);
    try{
        await observation.save().then(
            async data => {
                await Encounters.findOneAndUpdate(
                    {id:data.encounterid},
                    {$set:{observation:data._id}}
                )

                return Patients.findOneAndUpdate(
                    {id:data.patientid},
                    {$push:{observations:data._id}},
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

export default observationsData;