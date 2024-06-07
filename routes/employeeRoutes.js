const express=require('express');
const router=express.Router();
const employeeController=require('../controllers/employeeController');
const verify=require('../verification');

router.post('/',verify.verifytoken,employeeController.createEmployee);
router.get('/',verify.verifytoken,employeeController.getAllEmployee);
router.get('/:id',verify.verifytoken,employeeController.getEmployeeById);
router.put('/:id',verify.verifytoken, employeeController.updateEmployee);
router.delete('/:id',verify.verifytoken, employeeController.deleteEmployee);

module.exports=router;