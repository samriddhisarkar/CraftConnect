const exp=require("express")
const router=exp.Router();

const fs=require("fs");

const Village=require("../db/Donation");

router.get("/don",async (req,res)=>{

    var data=await Village.find(); 
    res.json(data);
    });

router.post("/vill",async(req,res)=>{
    var villobj={
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        village:req.body.village,
        donate:req.body.donate,
        money:req.body.money,
        accessories:req.body.accessories,
        location:req.body.location,
    };
    await Village.create(villobj);

            console.log(req.body);
            res.json({msg:"Submitted to server"});

});

module.exports=router;