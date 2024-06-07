const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');

const userDetails= sequelize.define('userinfos',{
    name:DataTypes.STRING,
    password:DataTypes.STRING
},
{
    timesamps:false
});

module.exports=userDetails;