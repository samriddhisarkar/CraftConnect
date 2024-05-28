
import { useState } from "react";
import Thanks from "./Thanks";
import "./Style.css"; 
import Footer from './Footer';
import Navigation from './Navigation';
function Form(){
    let[name,setName]=useState("")
    let[address,setAddress]=useState("") 
    let[phone,setPhone]=useState("")
    let[email,setEmail]=useState("")
    let[village,setVillage]=useState("")
    let[donate,setDonate]=useState("")
    let[money,setMoney]=useState("")
    let[accessories,setAccessories]=useState("")
    let[location,setLocation]=useState("")
    const [donationCompleted, setDonationCompleted] = useState(false);

  // const handleDonation = () => {
  //   // your existing donation handling code...

  //   // Set donationCompleted to true after donation is completed
  //   setDonationCompleted(true);
  // };

    return(
        <>
        <Navigation/>
        <div className="container-fluid form-container">
                <h1 className="form-heading">Donate For Villages</h1>
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
      <p><input className="form" type="text" placeholder="Enter Your Email Address" required="required" onChange={(ev)=>{
        setEmail(ev.target.value);
      }} /></p>

      <p>Village</p>
      <p>
      <select className="form" onChange={(ev)=>{
            setVillage(ev.target.value)
        }} >
            <option value="">-Select Village-</option>
            <option value="Shantiniketan, Birbhum">Shantiniketan, Birbhum</option>
            <option value="Bolpur, Birbhum">Bolpur, Birbhum</option>
            <option value="Bishnupur, Bankura">Bishnupur, Bankura</option>
            <option value="Bankura, Bankura">Bankura, Bankura</option>
            <option value="Dargeeling, Darjeeling">Dargeeling, Darjeeling</option>
            <option value="Kalimpong, Darjeeling">Kalimpong, Darjeeling</option>
            <option value="Charida, Purulia">Charida, Purulia</option>
            <option value="Krishnanagar Ghurni, Nadia">Krishnanagar Ghurni, Nadia</option>
            <option value="Shantipur, Nadia">Shantipur, Nadia</option>
            <option value="Kumartuli, Kolkata">Kumartuli, Kolkata</option>
            <option value="Baharampur, Murshidabad">Baharampur, Murshidabad</option>
            <option value="Khoroi, Midnapore">Khoroi, Midnapore</option>

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

        <p><a href="/thanks"><button onClick={async ()=>{
        // console.log(name);
        // console.log(address);
        // console.log(phone);
        // console.log(email);
        // console.log(village);
        // console.log(donate);
        // console.log(money);
        // console.log(accessories);
        // console.log(location);
        var fd1=new FormData();
                fd1.append("name",name);
                fd1.append("address",address);
                fd1.append("phone",phone);
                fd1.append("email",email);
                fd1.append("village",village);
                fd1.append("donate",donate);
                fd1.append("money",money);
                fd1.append("accessories",accessories);
                fd1.append("location",location);
                setDonationCompleted(true);

                var resp=await fetch("http://localhost:2000/village/vill",{
                  method:'POST',
                  body:fd1
                });
                var data=await resp.json();
                console.log(data);
     }}
     
    
     >Donate</button></a></p>
    </div>
    </div>
    
      {donationCompleted && (<Thanks donationType={donate} location={location} />
      )}
      
      <Footer/>
        </>
    );
}
export default Form;