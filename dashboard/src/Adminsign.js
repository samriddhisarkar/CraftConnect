
import { useState } from "react";
function Adminsign(){
  let[name,setName]=useState("")
  let[phone,setPhone]=useState("")
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  let[confirmpassword,setConfirmpassword]=useState("")
  const [signedUp, setSignedUp] = useState(false);


    return(
        <>
        <div className="container-fluid form1-container">
          <h1 style={{textAlign:"center"}} className="form1-heading">Admin Registration</h1>
          <p style={{textAlign:"center"}}>Enter details to add new admins</p>
          <div className="container form1 -content">
    
            <p>Name</p>
            <p><input className="form-control" type="text" placeholder="Enter Your Full Name" required="required" onChange={(ev)=>{
              setName(ev.target.value);
            }} /></p>

            <p>Phone number</p>
            <p><input className="form-control" type="number" placeholder="Enter Your Phone Number" required="required" onChange={(ev)=>{
              setPhone(ev.target.value);
            }} /></p>

            <p>Email</p>
            <p><input className="form-control" type="email" placeholder="Enter Your Email Address" required="required" onChange={(ev)=>{
              setEmail(ev.target.value);
            }} /></p>

            <p>Password</p>
            <p><input className="form-control" type="password" placeholder="Enter Your Password" required="required" onChange={(ev)=>{
              setPassword(ev.target.value);
            }} /></p>

            <p>Confirm Password</p>
            <p><input className="form-control" type="password" placeholder="Confirm Your Password" required="required" onChange={(ev)=>{
              setConfirmpassword(ev.target.value);
            }} /></p>

            <p><button className="btn btn-primary" onClick={async ()=>{
                   if (name && phone&& email && password && confirmpassword) {
                    var fd=new FormData();
                    fd.append("name",name);
                    fd.append("phone",phone); 
                    fd.append("email",email);
                    fd.append("password",password);
                    fd.append("confirmpassword",confirmpassword);

                    // console.log("Name:", name);    
                    // console.log("Phone:", phone);
                    // console.log("Email:", email);
                    // console.log("Password:", password);
                    //  console.log("confirmpassword:", confirmpassword);
                    setSignedUp(true);
                    var resp=await fetch("http://localhost:2000/adminauth/sign",{
          method:'POST',
          body:fd
        });
        var data=await resp.json();
          console.log(data);
                } else {
                    console.log("Please provide all the details.");
                } 
              }}>Sign Up</button>
            </p> 
             {signedUp && <p>Signed up successful!</p>}

          </div>
        </div>

        </>
    )

}
export default Adminsign;