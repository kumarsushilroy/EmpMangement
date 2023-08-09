
const empModel = require('../Models/Empmodel');

const getEmp = async (req,res)=>{
    const getemp = await empModel.find({});

    res.status(200).json(getemp);

};

module.exports = getEmp;