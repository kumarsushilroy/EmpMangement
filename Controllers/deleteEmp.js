
const empModel = require('../Models/Empmodel');

const deleteEmp = async(req,res)=>{
    const id = req.params.id;
    const dlt = await empModel.findByIdAndDelete(id);
     res.status(200).json(dlt);
}

module.exports = deleteEmp;