const Employee=require("../models/employee");

exports.createEmployee=(req,res)=>{  
  try{
    const employee=Employee.create(req.body);
    res.json({message:"employee created"});
  }
  catch (err){
    res.json({message:err.message});
  }
}

exports.getAllEmployee=async(req,res)=>{
  try{
    const employee=await Employee.findAll();
    res.json(employee);
  } catch (err){
    res.json({message:err.message});
  }
};

exports.getEmployeeById=async(req,res)=>{
  try{
    const employee=await Employee.findOne({where:{id:req.params.id}});
    if (!employee){
      return res.json({message:"employee not found"});
    }
    res.json(employee);
  } catch (err){
    res.json({message:err.message});
  }
};

exports.updateEmployee=async(req,res)=>{
  try{
    const employee=await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.json({message:"employee not found"});
    }
    await employee.update(req.body);
    res.json(employee);
  } catch (err){
    res.json({message:err.message});
  }
};

exports.deleteEmployee=async(req,res)=>{
  try{
    const employee = await Employee.findByPk(req.params.id);
    if (!employee){
      return res.json({message:"employee not found"});
    }
    await employee.destroy();
    res.json({message:"employee deleted"})
  } catch (err){
    res.json({ message: err.message });
  }
};
