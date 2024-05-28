
import "./Style.css"; 
import { useState } from "react";
import Footer from './Footer';
import Navigation from './Navigation';
function Arform(){
    let[name,setName]=useState("")
    let[address,setAddress]=useState("")
    let[phone,setPhone]=useState("")
    let[email,setEmail]=useState("")
    let[artisans,setArtisans]=useState("")
    let[donate,setDonate]=useState("")
    let[money,setMoney]=useState("")
    let[accessories,setAccessories]=useState("")
    let[location,setLocation]=useState("")

    return(
        <>
        <Navigation/>
        <div className="container-fluid form-container">
                <h1 className="form-heading">Donate For Artisans</h1>
                <div className="container form-content">
    
      <p>Name</p>
      <p><input className="form" type="text" placeholder="Enter Your Full Name" required="required" onChange={(ev)=>{
        setName(ev.target.value);
      }} /></p>

      <p>Address</p>
      <p><input className="form" type="text" placeholder="Enter Your Address" required="required" onChange={(ev)=>{
        setAddress(ev.target.value)
      }} /></p>

      <p>Phone number</p>
      <p><input className="form" type="number" placeholder="Enter Your Phone Number" required="required" onChange={(ev)=>{
        setPhone(ev.target.value);
      }} /></p>

      <p>Email</p>
      <p><input className="form" type="email" placeholder="Enter Your Email Address" required="required" onChange={(ev)=>{
        setEmail(ev.target.value);
      }} /></p>

      <p>Artisans</p>
      <p>
      <select className="form" required="required" onChange={(ev)=>{
            setArtisans(ev.target.value)
        }} >
            <option value="">-Select an Artisan-</option>
            <option value="Artisan 1">Artisan 1</option>
            <option value="Artisan 2">Artisan 2</option>
            <option value="Artisan 3">Artisan 3</option>
            <option value="Artisan 4">Artisan 4</option>

        </select>
      </p>

      <p>Donate</p>
      <p>
        <select className="form" required="required" onChange={(ev) => {
          setDonate(ev.target.value);
        }}>
          <option value="">-Select -</option>
          <option value="Money">Money</option>
          <option value="Accessories">Accessories</option>
          <option value="Both">Both</option>
        </select>
      </p>

      {donate === "Money" || donate === "Both" ? (
        <>
          <p>Enter the amount</p>
          <p>
            <input
              className="form" type="number" required="required" onChange={(ev) => {
                setMoney(ev.target.value);
              }}
            />
          </p>
        </>
      ) : null}

      {donate === "Accessories" || donate === "Both" ? (
        <>
          <p>Accessories Name and Details</p>
          <p>
            <textarea
              className="form" required="required" onChange={(ev) => {
                setAccessories(ev.target.value);
              }}
            ></textarea>
          </p>
    <p>Location</p>
    <p>
      <input
        className="form" type="text" required="required" onChange={(ev) => {
          setLocation(ev.target.value);
        }}
      />
    </p>
  </>
) : null}

        <p><a href="/thanks"><button  onClick={async ()=>{
        // console.log(name);
        // console.log(address);
        // console.log(phone);
        // console.log(email);
        // console.log(artisans);
        // console.log(donate);
        // console.log(money);
        // console.log(accessories);
        // console.log(location);
        var fd2=new FormData();
        fd2.append("name",name);
        fd2.append("address",address);
        fd2.append("phone",phone);
        fd2.append("email",email);
        fd2.append("artisans",artisans);
        fd2.append("donate",donate);
        fd2.append("money",money);
        fd2.append("accessories",accessories);
        fd2.append("location",location);

        var resp=await fetch("http://localhost:2000/artisan/arti",{
          method:'POST',
          body:fd2
        });
        var data=await resp.json();
        console.log(data);
}}
        
     >Donate</button></a></p>
    </div>
    </div>
<Footer/>
        </>
    );
}
export default Arform;