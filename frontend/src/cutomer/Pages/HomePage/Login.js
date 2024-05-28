import "./Login.css";
import { useState} from "react";
import {useNavigate} from "react-router-dom";
// import images from "./src/loginback.jpg";
function Login(){
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  const navi=useNavigate()
    

 
    return(
     <>
     <div className="" style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/loginback.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Adjust as necessary
    width: '100%', // Adjust as necessary
    }}>

    <div className="wrapper" style={{backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)'
    
    }}>
  <form>
    <h2 style={{fontWeight: "bold"}}>LOGIN</h2>

    <div className="input-field">
      <input
        type="text"
        name="email"
        required
        onChange={(ev) => {
          setEmail(ev.target.value);
        }}
      />
      <label style={{fontWeight: "bold"}} htmlFor="email">Enter your email</label>
      <i className="bx bxs-user"></i>
    </div>

    <div className="input-field">
      <input
        type="password"
        name="password"
        required
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
      />
      <label style={{fontWeight: "bold"}} htmlFor="password">Enter your password</label>
      </div>
      </form>
            <p><button onClick={async ()=>{
                  // if (email && password) {
                    var fd = new FormData();
                    fd.append("email", email);
                    fd.append("password", password);
                    var resp=await fetch("http://localhost:2000/auth/login",{
                      method:'POST', 
                      body:fd
                    });
                    var data=await resp.json();
                    console.log(data);
              
                     if(data.msg==null){
                    localStorage.setItem("cn",data.name);
                    localStorage.setItem("cid",data.id);
                   
                   navi("/information")
                  //  window.location='/front'
                     }else{
                      alert(data.msg)
                    }
                    // FormData.append("Email:", email);
                    // console.log("Password:", password);
                    // setLoggedIn(true);
                // } else {
                //     console.log("Please provide both email and password.");
                // }
              }}>Login</button>
            </p>
            {/* {loggedIn && <p>Login successful!</p>} */}

            <div className="form-footer text-center">
            <p>Do not have an account? <a href="./signup" data-toggle="modal" data-dismiss="modal">Signup Here</a></p>
            {/* <p><a href="./Forgotpass" data-toggle="modal" data-dismiss="modal">Forgot Password ?</a></p> */}
            </div>
            
          </div>
        {/* </div> */}
        </div>
        </>
    )
}
export default Login;