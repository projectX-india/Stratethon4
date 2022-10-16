import { Router } from "express";
import Patients from "../models/Patients.js";
import Encounters from "../models/Encounters.js";
import Devices from "../models/Devices.js";

const devicesData = Router();

devicesData.post('/insert',async(req,res) => {
    const device = new Devices(req.body);
    try{
        await device.save().then(
            async data => {
                await Encounters.findOneAndUpdate(
                    {id:data.encounterid},
                    {$set:{device:data._id}}
                )

                return Patients.findOneAndUpdate(
                    {id:data.patientid},
                    {$push:{devices:data._id}},
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

export default devicesData;