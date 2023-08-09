
const empModel = require('../Models/Empmodel');

const getsingleEmp = async(req,res)=>{
    const id = req.params.id;
   const response = await empModel.findById(id);
   res.status(200).json(response);
   
};

module.exports = getsingleEmp;