const express = require('express');
const http=require('http');
const addPatients = require('../routes/addPatients');
const getPatients=require('../routes/getPatients');
const patientInfo=require('../routes/patientInfo');
require('../db/mongoose');

const port =process.env.PORT || 3001

const app = express();

const server=http.createServer(app);


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://fetchpatientinfo.herokuapp.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use(addPatients());
app.use(getPatients());
app.use(patientInfo());

server.listen(port, () => {
    console.log(`server listening in port${port}`)
})
