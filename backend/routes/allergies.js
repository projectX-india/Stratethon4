import { Router } from "express";
import Patients from "../models/Patients.js";
import Encounters from "../models/Encounters.js";
import Allergies from "../models/Allergies.js";

const allergiesData = Router();

allergiesData.post('/insert',async(req,res) => {
    const allergie = new Allergies(req.body);
    try{
        await allergie.save().then(
            async data => {
                await Encounters.findOneAndUpdate(
                    {id:data.encounterid},
                    {$set:{allergie:data._id}}
                )

                return Patients.findOneAndUpdate(
                    {id:data.patientid},
                    {$push:{allergies:data._id}},
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

export default allergiesData;