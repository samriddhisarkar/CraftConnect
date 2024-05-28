const exp=require("express")
const router=exp.Router();

const fs=require("fs");

const Contact=require("../db/Contact_tb");

router.get("/con",async (req,res)=>{

    var data=await Contact.find(); 
    res.json(data);
    });

router.post("/ctn",async(req,res)=>{
    var conobj={
        firstname:req.body.name,
        lastname:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message,    
    };
    await Contact.create(conobj);

            console.log(req.body);
            res.json({msg:"Submitted to server"});

});

module.exports=router;