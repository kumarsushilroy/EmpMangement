
const express = require('express');

const app = express();
const dotenv = require('dotenv').config()

const port = process.env.PORT || 4000

const connection = require('./Connection');

const cors = require('cors');  

app.use(express.json());
app.use(cors());

const createEmpRoute = require('./Routes/createEmps');
const gettingEmp = require('./Routes/getEmps');
const getSingle = require('./Routes/getsingleEmps');
const updateEmp = require('./Routes/updateEmps');
const delteEMp = require('./Routes/deleteEmps');

// create employ
app.use(createEmpRoute);

// get employ
app.use(gettingEmp);

// get single Emp
app.use(getSingle);

// update employ
app.use(updateEmp);

// delete emp
app.use(delteEMp);


app.get('/get', (req,res)=>{
    res.json({"message":"true"})
});



app.listen(port, (req,res)=>{
    console.log('server is running....');
    connection();
})