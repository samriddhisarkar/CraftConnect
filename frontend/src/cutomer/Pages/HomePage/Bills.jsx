import { useState } from "react";
function Bills(){
  let[name,setName]=useState("")
  let[phone,setPhone]=useState("")
  let[address,setAddress]=useState("")

  //const [signedUp, setSignedUp] = useState(false);

   // const handleSubmit = () => {
        
       // setSignedUp(true);
    return(
    <>
<div className="container-fluid form1-container">
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
    <p><input className="form-control" type="address" placeholder="Enter Your Address" required="required" onChange={(ev)=>{
      setAddress(ev.target.value);
    }} /></p>


    <p><button onClick={ ()=>{
           if (name && phone&& address) {
            console.log("Name:", name);    
            console.log("Phone:", phone);
            console.log("Address:", address);
            setSignedUp(true);
        } else {
            console.log("Please provide all the details.");
        } 
      }}>Pay Now</button>
      </p>

  </div>
</div>

</>
    );
}
export default Bills;