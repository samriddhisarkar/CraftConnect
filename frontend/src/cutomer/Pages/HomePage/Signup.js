
import { useState } from "react";
function Signup(){
  let[name,setName]=useState("")
  let[phone,setPhone]=useState("")
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  // let[confirmpassword,setConfirmpassword]=useState("")
  const [signedUp, setSignedUp] = useState(false);

    // const handleSubmit = () => {
        
    //     setSignedUp(true);
    // };

    return(
        <>   <div className="" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/loginback.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh', // Adjust as necessary
          width: '100%', // Adjust as necessary
          }}>
      
          <div className="wrapper" style={{backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)', width:'450px',height:'450px'}}>
        <form>
          <h2 style={{fontWeight: "bold"}}>SIGN-UP</h2>
          <div className="input-field" >
            <input style={{fontWeight: "bold"}}
              type="text"
              name="name"
              required
              onChange={(ev) => {
                setName(ev.target.value);
              }}
            />
            <label style={{fontWeight: "bold"}} htmlFor="email">Enter your Name</label>
            </div>
            <div className="input-field">
            <input  style={{fontWeight: "bold"}} 
              type="number"
              name="phone"
              required
              onChange={(ev) => {
                setPhone(ev.target.value);
              }}
            />
            <label style={{fontWeight: "bold"}} htmlFor="email">Enter your Phone</label>
            </div>
      
          <div className="input-field">
            <input  style={{fontWeight: "bold"}}
              type="text"
              name="email"
              required
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
            />
            <label style={{fontWeight: "bold"}} htmlFor="email">Enter your Email</label>
            
          </div>
      
          <div className="input-field">
            < input style={{fontWeight: "bold"}}
              type="password"
              name="password"
              required
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
            />
            <label style={{fontWeight: "bold"}} htmlFor="password">Enter your Password</label>
            </div>
            </form>
        {/* <div className="container-fluid form1-container">
          <h1 className="form1-heading">Signup</h1>
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
            }} /></p> */}

            {/* <p>Confirm Password</p>
            <p><input className="form-control" type="password" placeholder="Confirm Your Password" required="required" onChange={(ev)=>{
              setConfirmpassword(ev.target.value);
            }} /></p> */}

            <p><button onClick={async ()=>{
                   if (name && phone&& email && password ) {
                    var fd=new FormData();
                    fd.append("name",name);
                    fd.append("phone",phone); 
                    fd.append("email",email);
                    fd.append("password",password);
                    // fd.append("confirmpassword",confirmpassword);

                    // console.log("Name:", name);    
                    // console.log("Phone:", phone);
                    // console.log("Email:", email);
                    // console.log("Password:", password);
                    //  console.log("confirmpassword:", confirmpassword);
                    setSignedUp(true);
                    var resp=await fetch("http://localhost:2000/auth/signup",{
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

            <div className="form-footer text-center">
              <p>Already got an account? <a href="./Login" data-toggle="modal" data-dismiss="modal">Login Here</a></p>
            </div>

          </div>
        </div>

        </>
    )

}
export default Signup;