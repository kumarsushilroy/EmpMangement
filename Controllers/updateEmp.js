
const empModel = require('../Models/Empmodel');

const updateEmp = async(req,res)=>{
    const id = req.params.id
  const update = await empModel.findByIdAndUpdate({_id:id}, req.body, {new:true});
 res.status(200).send(update);
};

module.exports = updateEmp;