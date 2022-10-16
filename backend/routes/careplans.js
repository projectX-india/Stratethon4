import { Router } from "express";
import Patients from "../models/Patients.js";
import Encounters from "../models/Encounters.js";
import CarePlans from "../models/CarePlans.js";

const careplansData = Router();

careplansData.post('/insert',async(req,res) => {
    const careplan = new CarePlans(req.body);
    try{
        await careplan.save().then(
            async data => {
                await Encounters.findOneAndUpdate(
                    {id:data.encounterid},
                    {$set:{careplan:data._id}}
                )

                return Patients.findOneAndUpdate(
                    {id:data.patientid},
                    {$push:{careplans:data._id}},
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

export default careplansData;