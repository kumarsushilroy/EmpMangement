
const empModel = require('../Models/Empmodel');

const createEmp = async(req,res)=>{
    
    const create = new empModel({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    })

    const createdEmp = await create.save();
    res.status(200).json(createdEmp);
};

module.exports = createEmp;