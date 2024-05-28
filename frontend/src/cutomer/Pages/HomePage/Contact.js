//import React from 'react';
// import './Contact.css';
import { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
function Contact() 
{
  let [firstname,setFristname]=useState("")
  let [lastname,setLastname]=useState("")
  let [email,setEamil]=useState("")
  let [phone,setPhone]=useState("")
  let [message,setmessage]=useState("")


  return (
    <div style={{backgroundImage: `url('https://t4.ftcdn.net/jpg/04/79/43/43/360_F_479434307_WXbUNS6UOiNODCQPFL5ZoWPJckkY2m4X.jpg')`, backgroundSize: 'cover', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
  
     
  <Navigation/>

<main style={{height: '100vh'}}>
  <div className="container py-5">
    <div className="row g-5">
      {/* Contact Information Block */}
      <div className="col-xl-6" >
        <div className="row row-cols-md-2 g-4">
          <div className="aos-item" data-aos="fade-up" data-aos-delay={200}>
            <div className="aos-item__inner" >
              <div className=" hvr-shutter-out-horizontal d-block p-3">
                <div className="d-flex justify-content-start">
                  {/* <i className="fa-solid fa-envelope h3 pe-2" /> */}
                  <span  className="h5" style={{fontSize:"25px",}}>Email</span>
                </div>
                <span style={{fontSize:"20px",frontweight:"400"}}>craftconnect@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="aos-item" data-aos="fade-up" data-aos-delay={400}>
            <div className="aos-item__inner">
              <div className="hvr-shutter-out-horizontal d-block p-3">
                <div className="d-flex justify-content-start">
                  {/* <i className="fa-solid fa-phone h3 pe-2" /> */}
                  <span className="h5" style={{fontSize:"25px",}}>Phone</span>
                </div>
                <span style={{fontSize:"20px",frontweight:"400"}}>+033 2543-2454,   +9876345376</span>
              </div>
            </div>
          </div>
        </div>
        <div className="aos-item mt-4" data-aos="fade-up" data-aos-delay={600}>
          <div className="aos-item__inner">
            <div className=" hvr-shutter-out-horizontal d-block p-3">
              <div className="d-flex justify-content-start">
                {/* <i className="fa-solid fa-location-pin h3 pe-2" /> */}
                <span  className="h5" style={{fontSize:"25px",}}>Office location</span>
              </div>
              <span style={{fontSize:"18px",frontweight:"400"}}>12/A ,XYZ ROAD-KOLKATA</span>
            </div>
          </div>
        </div>
        <div className="aos-item" data-aos="fade-up" data-aos-delay={800}>
          {/* <div className="mt-4 w-100 aos-item__inner">
            <iframe className="hvr-shadow" width="100%" height={345} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=300&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.maps.ie/distance-area-calculator.html"&gt;measure acres/hectares on map&lt;/a&gt;</iframe>
          </div> */}
        </div>
      </div>
      {/* Contact Form Block */}
      <div className="col-xl-6">
            <form>
              <h2 className="pb-4" style={{fontWeight: "bold" ,fontSize:'50px'}}>Contact Us</h2>
              <div className="row g-4">
                <div className="col-6 mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label" style={{fontSize:"20px"}}>First-Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="FIRST NAME" style={{  height: "35px", borderColor:"black"}}  onChange={(ev)=>{
                    setFristname(ev.target.value);
                  }}/>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label" style={{fontSize:"20px"}}>Last-Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="LAST NAME" style={{ height: "35px", borderColor:"black" }} onChange={(ev)=>{
                    setLastname(ev.target.value);
                  }}/>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" style={{fontSize:"20px"}}>Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{ height: "35px", borderColor:"black" }} onChange={(ev)=>{
                    setEamil(ev.target.value);
                  }}/>
   
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" style={{fontSize:"20px"}}>Phone</label>
                <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder={+9876543212} style={{ height: "35px", borderColor:"black" }} onChange={(ev)=>{
                    setPhone(ev.target.value);
                  }}/>
  
              </div>
              
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{fontSize:"20px"}}>Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={" Type Your Message......."} style={{ borderColor:"black" }} onChange={(ev)=>{
                    setmessage(ev.target.value);
                  }}/>
  
              </div>
              <button type="button" className="btn btn-dark" onClick={async()=>{
                var fd1=new FormData();
                fd1.append("fname",firstname);
                fd1.append("lname",lastname);
                fd1.append("email",email);
                fd1.append("phone",phone);
                fd1.append("message",message);
                var resp=await fetch("http://localhost:2000/contact/ctn",{
                  method:'POST',
                  body:fd1
                });
                var data=await resp.json();
                console.log(data);
                }}>Send Message</button>
            </form>
          </div>
    </div>
  </div>
</main>

<Footer/>
    </div>
  )
}

export default Contact;
