import React from 'react';
import './Contact.css';

function Feedback(){
  return (
    <div style={{
      backgroundImage: `url('https://img.freepik.com/free-photo/wedding-arrangement-paper-background_23-2148243961.jpg?t=st=1713526427~exp=1713530027~hmac=6b6c538f301a681db5d6d6208271f3f88a356f89a3f9054bece45133beb8b7ef&w=996')`,
      backgroundSize: 'cover',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
        <div class="wrapper"> 
  <div class="title">Rate your experience</div>
  <div class="content">We highly value your feedback! Kindly take a moment to rate your experience and provide us with your valuable feedback.</div>
  <div class="rate-box">
    <input type="radio" name="star" id="star0"/>
    <label class="star" for="star0"></label>
    <input type="radio" name="star" id="star1"/>
    <label class="star" for="star1"></label>
    <input type="radio" name="star" id="star2" checked="checked"/>
    <label class="star" for="star2"></label>
    <input type="radio" name="star" id="star3"/>
    <label class="star" for="star3"></label>
    <input type="radio" name="star" id="star4"/>
    <label class="star" for="star4"></label>
  </div>
  <textarea cols="30" rows="6" placeholder="Tell us about your experience!"></textarea>
  <div class="submit-btn">Send</div>
</div>
      
    </div>
  )
}

export default Feedback;
