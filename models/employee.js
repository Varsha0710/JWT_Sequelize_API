const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');

const emp = sequelize.define('empdetails',{
    emp_name:DataTypes.STRING,
    mail_id:DataTypes.STRING,  
    phone_no:DataTypes.DOUBLE,
    department:DataTypes.STRING
});

module.exports=emp;