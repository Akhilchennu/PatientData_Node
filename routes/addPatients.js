const express = require('express');
const userModel = require('../models/users');
const router = new express.Router();

const addPatients = () => {

    router.post('/patients', async (req, res) => {
        try {
            await userModel.insertMany(req.body.patientData);
            res.status(200).send({ success: true });
        }
        catch (error) {
            res.status(500).send({ success: false, message: error });
        }
    })

    return router;
}

module.exports = addPatients;