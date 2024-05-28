
import { useState } from "react";
import "./Login.css";
import Navigation from './Navigation';
import Footer from './Footer';
function Paydetails(){
  let[name,setName] = useState("")
  let[phone,setPhone]=useState("")
  let[email,setEmail]=useState("")
  let[gender,setGender]=useState("")
  let[address,setAddress]=useState("")
  // let[confirmpassword,setConfirmpassword]=useState("")
  const [detailsSubmitted, setDetailsSubmitted] = useState(false);

    // const handleSubmit = () => {
        
    //     setSignedUp(true);
    // };

    return(
        <>   
        <Navigation/>
        <div className="" style={{
          backgroundImage: `url(https://img.freepik.com/free-psd/delivery-3d-illustration-with-man-scooter-with-backpack_23-2149442162.jpg?t=st=1716273027~exp=1716276627~hmac=b974494dc6baeca1aa59902e8ff5f94e64f1b74a50de74a172624cc5955e51b5&w=996)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh', // Adjust as necessary
          width: '100%', // Adjust as necessary
          }}>
      
          <div className="wrapper" style={{backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)', width:'450px',height:'480px'}}>
        <form>
            
          <h2 style={{fontWeight: "bold"}}>DETAILS FOR DELIVERY</h2>
          <div className="input-field">
            <input  style={{fontWeight: "bold"}} 
              type="text"
              name="name"
              required
              onChange={(ev) => {
                setName(ev.target.value);
              }}
            />
            <label style={{fontWeight: "bold"}} htmlFor="email">Recipient name</label>
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
          <div className="input-field" >
            <input style={{fontWeight: "bold"}}
              type="text"
              name="gender"
              required
              onChange={(ev) => {
                setGender(ev.target.value);
              }}
            />
            <label style={{fontWeight: "bold"}} htmlFor="email">Gender: Male/Female/Other</label>
            </div>
      
          <div className="input-field">
            < input style={{fontWeight: "bold"}}
              type="text"
              name="address"
              required
              onChange={(ev) => {
                setAddress(ev.target.value);
              }}
            />
            <label style={{fontWeight: "bold"}} htmlFor="address">Enter your address</label>
            </div>
            </form>
        

            <p><button onClick={async ()=>{
                   if ( name && phone && email && gender && address ) {
                    var fd=new FormData();
                    fd.append("name",name);
                    fd.append("phone",phone); 
                    fd.append("email",email);
                    fd.append("gender",gender);
                    fd.append("address",address);
                    // fd.append("confirmpassword",confirmpassword);

                    // console.log("Name:", name);    
                    // console.log("Phone:", phone);
                    // console.log("Email:", email);
                    // console.log("Password:", password);
                    //  console.log("confirmpassword:", confirmpassword);
                    setDetailsSubmitted(true);
                    var resp=await fetch("http://localhost:2000/paydetails/detail",{
          method:'POST',
          body:fd
        });
        var data=await resp.json();
          console.log(data);
                } else {
                    console.log("Please provide all the details.");
                } 
              }}>Submit Details</button>
            </p> 
             {detailsSubmitted && <p>Details saved for delivery reference</p>}

             

          </div>
  
        </div>
<Footer/>
        </>
    )

}
export default Paydetails;