let user=require('../models/user');
const jwt=require('jsonwebtoken');
let bcrypt=require('bcryptjs');

exports.signup=async(req,res)=>{
    let {name,password}=req.body;
    let hashedpass=await bcrypt.hash(password,8)
    try{
        let userDetail=user.create({name,password:hashedpass});
        return res.json({message:"user created"})
    }
    catch(err){
        res.json({message:err.message})
    }
}

exports.login= async(req,res)=>{
    let {name,password}=req.body
    let checkuser= await user.findAll({attributes:['name','password'],where:{name:req.body.name}});

    let data=checkuser[0];
    if(!data){
        return res.json({message:"user not found"});
    }
    
    bcrypt.compare(password,data.password,(err,checkpass)=>{
        console.log(checkpass);
        if(!checkpass){
            return res.json({message:"invalid password"});
        }
        token=jwt.sign({name},"sample",{expiresIn:'1200s'});
        return res.json({token,message:`${name} login successful`});
    });
}