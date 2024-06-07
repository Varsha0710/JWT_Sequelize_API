const express=require('express');
const bodyparser=require('body-parser');
const sequelize=require('./config/database');
const userRoutes=require('./routes/userRoutes');
const employeeRoutes=require('./routes/employeeRoutes');
const app=express();

// app.use(express.json());
app.use(bodyparser.json());
app.use('/user',userRoutes);
app.use('/employee',employeeRoutes);

const PORT=process.env.PORT || 8000;

sequelize.sync().then(()=>{
    app.listen(8000,()=>{
        console.log("server running on the port");
    });
});