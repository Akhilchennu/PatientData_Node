const express = require('express');
const userModel = require('../models/users');
const router = new express.Router();
const validator = require('validator');

const patientInfo = () => {

    router.get('/patients/:id', async (req, res) => {
        try {
            const patientid = req.params.id;
            if (!validator.isNumeric(patientid)) {
                return res.send({success:true,error:"PatientId is invalid"});
            }
            const patientInfo = await userModel.find({ patientid })
            if(!patientInfo){
                return res.send({success:true,error:"Patient Details not found"});
            }
            res.send({ success: true, patientInfo });
        }
        catch (error) {
            res.status(500).send({ success: false });
        }
    })

    return router;
}

module.exports = patientInfo;