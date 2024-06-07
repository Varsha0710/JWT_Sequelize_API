let bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.verifytoken=(req,res,next)=>{
    const token = req.headers.authorization;
    if (!token){
        return res.json({message:"token is required"});
    }
    jwt.verify(token,"sample",(err,decoded)=>{
        if (err){
            return res.json({message:"invalid token"});
        }
        next();
    });   
}