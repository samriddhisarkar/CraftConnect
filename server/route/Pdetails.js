const exp=require("express")
const router=exp.Router();

const fs=require("fs");

const Details=require("../db/Pay_details");

router.get("/det",async (req,res)=>{

    var data=await Details.find(); 
    res.json(data);
    });

router.post("/detail",async(req,res)=>{
    var detobj={
        recipient_name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        gender:req.body.gender,
        address:req.body.address,

    };
    await Details.create(detobj);

            console.log(req.body);
            res.json({msg:"Submitted to server"});

});

module.exports=router;