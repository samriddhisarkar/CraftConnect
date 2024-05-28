import { useState} from "react";
import "./Login.css";
import {useNavigate} from "react-router-dom";

function Adminlogin(){
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  // const [loggedIn, setLoggedIn] = useState(false); // Declare loggedIn state and its setter
  const navi=useNavigate()
    // const handleSubmit = () => {
    //     // Your login logic goes here
    //     // For demonstration, let's just set loggedIn to true
    //     setLoggedIn(true);
    // };

 
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

    <div className="wrapper" style={{display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)'
    
    }}>
  <form>
    <h2 style={{fontWeight: "bold"}}>LOGIN</h2>

    <div className="input-field" style={{fontWeight: "bold", width: "100%"}}>
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
    

            <p><button  style={{ display: 'block', margin: '20px auto 0', background: 'rgba(55, 24, 24, 0.818)', color: '#fff', fontWeight: 600, border: 'none', padding: '4px 10px', cursor: 'pointer', borderRadius: '3px', fontSize: '14px', border: '2px solid transparent', transition: '0.3s ease', boxShadow: '5px 5px rgba(140, 128, 128, 0.535)', ':hover': { color: 'rgba(73, 31, 31, 0.818)', borderColor: '#fff', background: 'rgba(255, 255, 255, 0.15)' } }}
            onClick={async ()=>{
                  // if (email && password) {
                    var fd = new FormData();
                    fd.append("email", email);
                    fd.append("password", password);
                    var resp=await fetch("http://localhost:2000/adminauth/adlogin",{
                      method:'POST', 
                      body:fd
                    });
                    var data=await resp.json();
                    console.log(data);
              
                     if(data.msg==null){
                    localStorage.setItem("cn",data.name);
                    localStorage.setItem("cid",data.id);
                   
                   navi("/dashboard")
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

           
          

          </div>
        </div>

        </>
    )
}
export default Adminlogin;