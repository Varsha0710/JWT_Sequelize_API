const {Sequelize,DataTypes}=require('sequelize');
const dotenv=require('dotenv');
dotenv.config();

const sequelize=new Sequelize(process.env.DB,process.env.USER,process.env.PASSWORD,{
    host:process.env.localhost,
    dialect:'mysql'
});

module.exports=sequelize;