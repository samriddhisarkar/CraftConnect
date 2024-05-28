import Menu from "./Menu";
import './Style.css';
import Footer from './Footer';

function Donation(){

    return(
        <>
        <Menu/>
        
        <div className="container">
                <div className="row">
                    <div className="col-md-12 categories-section">
                        <h2 style={{fontFamily:'verdana', fontWeight:"800", color:"brown"}} className="heading">Donate For</h2>
                        <div className="row justify-content-center">

            <div className="col-md-5 d-flex justify-content-center mb-4">
              <div className="card1">
                <img className="card1-image-top" style={{width:"100%"}} src="https://live.staticflickr.com/784/41477657831_0472035758_b.jpg"  />
                <div className="card1-body" >
                  <h4 className="card-title" style=
                  {{ fontWeight:"800",fontSize:"20px"}}>Villages</h4>
                  <p className="card-text">Handicraft villages of West Bengal</p>
                  <div className="button-container">
                      {/* <a href="#" className="btn btn-sm">View Details</a> */}
                      <a href="./Form" className="btn btn-sm">Donate</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5 d-flex justify-content-center mb-4">
              <div className="card1">
                <img className="card1-image-top" src="https://artisan.wb.gov.in/files/uploads/wbap/photo_gallery/2023/06/kolexpo1.jpg" />
                <div className="card1-body" >
                  <h4 className="card1-title" style=
                  {{ fontWeight:"800",fontSize:"20px"}}>Artisans</h4>
                  <p className="card-text">Handicraft Artisans of West Bengal</p>
                    <div className="button-container">
                      {/* <a href="#" className="btn btn-sm" style={{}}>View Details</a> */}
                      <a href="./Arform" className="btn btn-sm" style={{}}>Donate</a>
                      <style>
                        {`
                          .btn.btn-sm:hover {
                            background-color: hsla(342, 51%, 45%, 0.875); /* Change to the desired color */
                          }
                        `}
                      </style>
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
<Footer/>

        </>
    );
}
export default Donation;