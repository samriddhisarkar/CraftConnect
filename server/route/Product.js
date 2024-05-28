const exp=require("express");
const router=exp.Router();
const Product = require("../db/product_tbl");
const fs = require("fs");
//const jwt=require("jsonwebtoken");
router.get("/sel",async (req, res) => {
    var data=await Product.find();
    res.json(data);
});
// router.get("/tk",(req, res) => {
    
// })
router.post("/del",async (req, res) => {
     var id=req.body.pid;
      var data=await Product.findById(id);
      var img=data.product_image;
      await fs.unlinkSync("./public/product_img/"+img);
     await Product.findByIdAndDelete(id);
     res.json({msg:"Deleted"});

});
router.post("/ins",async (req,res)=>{

    var objimg=req.files.pimg;
    var pn=objimg.name;
    objimg.mv("./public/product_img/"+pn,async (err)=>{
        if(err){
            console.log(err);
        }
        else{
            var insobj={
                product_name:req.body.pname,
                product_price:req.body.pprice,
                product_details:req.body.pdetails,
                product_image:pn,
                product_cat:req.body.pCat
            }
            await Product.create(insobj);
            console.log(req.body);
            res.json({msg:"Submitted"});
        }
    })    
});
// router.post("/edit",async (req, res) => {
//     var id=req.body.pid;
//     var data=await Product.findById(id);
//     res.json(data);
// });
router.post("/edit", async (req, res) => {
    try {
        var id = req.body.id; // Accessing id from the request body
        var data = await Product.findById(id);
        if (data) {
            res.json(data); // Sending the product data as JSON response
        } else {
            res.status(404).json({ error: "Product not found" }); // Sending error if product is not found
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" }); // Sending internal server error if any occurs
    }
});

router.post("/upd",async (req,res)=>{
  var id=req.body.id;
  if(req.files!=null){
    var objimg=req.files.pimg;
    var pn=objimg.name;
    objimg.mv("./public/product_img/"+pn,async (err)=>{
        if(err){
            throw err;
        }
        else{
            var insobj={
                product_name:req.body.pname,
                product_price:req.body.pprice,
                product_details:req.body.pdetails,
                product_image:pn,
                product_cat:req.body.pCat
            };
            await Product.findByIdAndUpdate(id,insobj);
            console.log(req.body);
            res.json({msg:"Submitted"});
        }
    });
  } else{
    var insobj={
        product_name:req.body.pname,
        product_price:req.body.pprice,
        product_details:req.body.pdetails,
        product_cat:req.body.pCat
    };
    await Product.findByIdAndUpdate(id,insobj);
    console.log(req.body);
    res.json({msg:"Submitted"});
  }
});
router.get('/filter',async(req, res)=>{
    try{
        const page = parseInt(req.query.page) - 1||0;
        const limit = parseInt(req.query.limit)||5;
        const search = req.query.search || "";
        let sort = req.query.sort||"Price";
        let type = req.query.type|| "All";
    
        type === "All"
          ? (type = [...product_cat]) : (type = req.query.type.split(","));
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};
        if(sort[1]){
            sortBy[sort[0]] = sort[1];
        }else{
            sortBy[sort[0]] = "asc";
        }
        const filter = await Product.find({ product_name: { $regex: search, $options: "i"}})
         .where("type")
         .in([...product_cat])
         .sort(sortBy)
         .skip(page * limit)
         .limit(limit);
        const total = await Product.countDocuments({
            type: { $in: [...product_cat]},
            product_name: { $regex: search, $options: "i"},
        });
        const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            types: product_cat,
            filter,
        };
        res.status(200).json(response);
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: true, message: "Internal Server Error"});
    }
})
module.exports = router;


// module.exports.addToCart = async (req,res) => {
//     console.log(req.body, "62")
//     const isUpdate = product_tbl.updateOne({ _id : req.body.userId }, {
//         $addToSet : { cart : req.body.productId}
    
//     })

// }