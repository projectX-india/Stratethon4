import { Router } from "express";
import Patients from "../models/Patients.js";
import Encounters from "../models/Encounters.js";
import Supplies from "../models/Supplies.js";

const suppliesData = Router();

suppliesData.post('/insert',async(req,res) => {
    const supplie = new Supplies(req.body);
    try{
        await supplie.save().then(
            async data => {
                await Encounters.findOneAndUpdate(
                    {id:data.encounterid},
                    {$set:{supplie:data._id}}
                )

                return Patients.findOneAndUpdate(
                    {id:data.patientid},
                    {$push:{supplies:data._id}},
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

export default suppliesData;