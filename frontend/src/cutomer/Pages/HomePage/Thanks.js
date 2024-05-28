// import React from "react";
import "./Style.css"; 

function Thanks() {
  return (
    <>
      <div className="thank-you-container">
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
          <i className="fas fa-thumbs-up fa-5x mb-3" style={{ fontSize: "7rem", color: "#0096C7" }}></i>
            <h1 style={{fontWeight:"800", fontSize:"40px"}} className="mt-3">Thank You For Donating!</h1>
            <div className="button">
              <a href="./Donation" className="btn btn-sm text-center">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          .button-container {
            display: flex;
            justify-content: center;
            max-width: 150px; /* Set maximum button width if needed */
            margin-top: 20px; /* Adjust as needed */
          }
          .button-container .btn.btn-sm {
            background-color: #8c264fac;
            color: #ffffff;
            border-radius: 5px;
          }
          .button-container .btn.btn-sm:hover {
            background-color: hsla(342, 51%, 45%, 0.875);
          }
        `}
      </style>
    </>
  );
}

export default Thanks;
