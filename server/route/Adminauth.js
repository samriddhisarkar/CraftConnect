const exp=require("express")
const router=exp.Router();

const bcrypt=require("bcrypt");

const fs=require("fs");

// const jwt=require("jsonwebtoken");

const Customer=require("../db/Admin");

router.post("/sign",async (req,res)=>{

    const salt=await bcrypt.genSalt(10);
    const hashp=await bcrypt.hash(req.body.password,salt)
    const hashp1=await bcrypt.hash(req.body.confirmpassword,salt)

    var insdata={
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        password:hashp,
        confirmpassword:hashp1,
     
    }
   await Customer.create(insdata);

   res.json({msg:"signup done"});
});

router.post("/adlogin",async (req,res)=>{

var email=req.body.email;
var password=req.body.password;

var data=await Customer.findOne({email:email});

if(data!=null){

    bcrypt.compare(password,data.password,(err,result)=>{
        if(err){
            throw err;
        }else{
            if(result===true){
                var udata={
                    email:data.email,
                    name:data.name,
                    id:data._id
                };

                // var jtoken=jwt.sign(udata,"dfghjk");
                res.json(udata);

            }else{
                res.json({msg:"Invalid Login"});
            }
            
        }
    });

}else{

    res.json({msg:"Invalid Login"});
}


console.log(data);


});



module.exports=router;