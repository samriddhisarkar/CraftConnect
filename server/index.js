// require("dotenv").config();

// const exp=require("express");
// const app = exp();

// const cors = require("cors");
// app.use(cors());

// const mongoose = require("mongoose");
// mongoose.connect('mongodb+srv://anuraagkarmakar1706:anu1234@cluster0.73wk6gp.mongodb.net/craftconnect?retryWrites=true&w=majority&appName=Cluster0');
// app.use(exp.static('public'))
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false}))
// app.use(bodyParser.json());

// const exf=require("express-fileupload");
// app.use(exf());

// const pr=require('./route/Product');
// const ar=require('./route/Auth');
// const vil=require('./route/Village');
// const art=require('./route/Artisan');
// const con=require('./route/Contact');
// const ad=require('./route/Adminauth');
// const pd=require('./route/Pdetails');

// app.get("/", (req, res)=>{
//     res.send("Hello Node!");
// });
// app.post("/ins", (req, res)=>{
//     console.log(req.body);
//     res.json({msg:"submitted"}
//     );
// })
// app.post("/signup", (req, res)=>{
//     console.log(req.body);
//     res.json({msg:"submitted"}
//     );
// })
// app.post("/sign", (req, res)=>{
//     console.log(req.body);
//     res.json({msg:"submitted"}
//     );
// })
// app.post("/login", (req, res)=>{
//     console.log(req.body);
//     res.json({msg:"Verifying..."}
//     );
// })
// app.post("/adlogin", (req, res)=>{
//     console.log(req.body);
//     res.json({msg:"Verifying..."});
// })
// app.post("/detail", (req, res)=>{
//     console.log(req.body);
//     res.json({msg:"submitted"}
//     );
// })
// app.post("/ctn", (req, res)=>{
//     console.log(req.body);
//     res.json({msg:"submitted"}
//     );
// })
// app.post("/vill", (req, res)=>{
//     console.log(req.body);
//     res.json({msg:"submitted"}
//     );
// })

// app.post("/arti", (req, res)=>{
//     console.log(req.body);
//     res.json({msg:"submitted"}
//     );
// })

// })
// // app.post('/add-to-cart', Product.addToCart)
// app.use("/product",pr);
// app.use("/auth",ar);
// app.use("/village",vil);
// app.use("/artisan",art);
// app.use("/contact",con);
// app.use("/adminauth",ad);
// app.use("/paydetails",pd);
// app.listen(2000)

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
//const connectToMongo = require('./database/db.js'); // Ensure this file exists
const payment = require('./route/payment.js'); // Ensure this file exists
const pr = require('./route/Product.js'); // Ensure this file exists
const ar = require('./route/Auth.js'); // Ensure this file exists
const vil = require('./route/Village.js'); // Ensure this file exists
const art = require('./route/Artisan.js');
const con=require('./route/Contact');
const ad=require('./route/Adminauth');
const pd=require('./route/Pdetails');
// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
// connectToMongo();
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://anuraagkarmakar1706:anu1234@cluster0.73wk6gp.mongodb.net/craftconnect?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
const port = process.env.PORT || 2000; // Use environment variable for port if available

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

// Routes
app.get('/', (req, res) => {
    res.send('Hello Node and Razorpay Payment Gateway Using React And Node Js');
});

app.post('/ins', (req, res) => {
    console.log(req.body);
    res.json({ msg: 'submitted' });
});

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.json({ msg: 'submitted' });
});

app.post('/vill', (req, res) => {
    console.log(req.body);
    res.json({ msg: 'submitted' });
});

app.post('/arti', (req, res) => {
    console.log(req.body);
    res.json({ msg: 'submitted' });
});
app.post("/sign", (req, res)=>{
    console.log(req.body);
    res.json({msg:"submitted"}
    );
});
app.post("/login", (req, res)=>{
    console.log(req.body);
    res.json({msg:"Verifying..."}
    );
});
app.post("/adlogin", (req, res)=>{
    console.log(req.body);
    res.json({msg:"Verifying..."});
});
app.post("/detail", (req, res)=>{
    console.log(req.body);
    res.json({msg:"submitted"}
    );
});
app.post("/ctn", (req, res)=>{
    console.log(req.body);
    res.json({msg:"submitted"}
    );
});

app.use('/product', pr);
app.use('/auth', ar);
app.use('/village', vil);
app.use('/artisan', art);
app.use("/contact",con);
app.use("/adminauth",ad);
app.use("/paydetails",pd);
app.use('/api/payment', payment);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
