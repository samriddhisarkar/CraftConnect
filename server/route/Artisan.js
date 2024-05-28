const exp=require("express")
const router=exp.Router();

const fs=require("fs");

const Artisan=require("../db/Ardonation");

router.get("/adon",async (req,res)=>{

    var data=await Artisan.find(); 
    res.json(data);
    });

router.post("/arti",async(req,res)=>{
    var artiobj={
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        artisans:req.body.village,
        donate:req.body.donate,
        money:req.body.money,
        accessories:req.body.accessories,
        location:req.body.location,
    };
    await Artisan.create(artiobj);

            console.log(req.body);
            res.json({msg:"Submitted to server"});

});

module.exports=router;