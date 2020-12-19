const express = require('express');
const userModel = require('../models/users');
const router = new express.Router();

const getPatients=()=>{

    router.get('/patients',async (req,res)=>{
      try{
      const patients=await userModel.find({})
      res.send({success:true,patients});
      }
      catch(error){
        res.status(500).send({success:false});
      }
    })

    return router;
}

module.exports = getPatients;