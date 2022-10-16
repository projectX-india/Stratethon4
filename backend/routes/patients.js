import Router from 'express';
import Patients from '../models/Patients.js';

const patientsData = Router();

patientsData.get('/:id',async (req,res) => {
    let patient = await Patients.findOne(
        {id:req.params.id}
    ).populate(["encounters","immunizations"]);
    return res.send(patient);
})


patientsData.post('/insert',async(req,res) => {
    const patient = new Patients(req.body);
    try{
        const savedPatient = await patient.save();
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

export default patientsData;