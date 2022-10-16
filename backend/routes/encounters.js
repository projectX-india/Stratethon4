import { Router } from "express";
import Patients from "../models/Patients.js";
import Encounters from "../models/Encounters.js";

const encountersData = Router();

encountersData.post('/insert',async(req,res) => {
    const encounter = new Encounters(req.body);
    try{
        await encounter.save().then(
            data => {
                return Patients.findOneAndUpdate(
                    {id:data.patientid},
                    {$push:{encounters:data._id}},
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

export default encountersData;