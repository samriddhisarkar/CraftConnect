// import { NavLink } from "react-router-dom";
import Navigation from './Navigation';
function Menu(){
    return(
      <>
      <Navigation />
      <header>
     {/* <nav className="navbar navbar-expand-lg fixed-top " >
  <div className="container-fluid">

    <a className="navbar-brand" href="#">
      <img src="./image/Logo.png" alt="" width={70} height={70} style={{ backgroundColor: 'rgba(2, 2, 2, 0.312)', backdropFilter: 'blur(0.05px)', borderRadius: "55%" }} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#" style={{ fontWeight: '700' }}>Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" style={{ fontWeight: '700' }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Villages
          </a>

          <ul className="dropdown-menu" style={{ backgroundColor: 'rgba(2, 2, 2, 0.312)', backdropFilter: 'blur(0.05px)', color: 'black' }} aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#"></a></li>
          </ul>
        </li>
         <li className="nav-item">
          <a className="nav-link text-white" href="#" style={{ fontWeight: '700' }} >About Us</a>
        </li> 
       
        <li className="nav-item">
          <a className="nav-link text-white" href="#" style={{ fontWeight: '700' }}>Our products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" style={{ fontWeight: '700' }}>Donate</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" style={{ fontWeight: '700' }}>Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" style={{ fontWeight: '700' }}>Feedback </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" style={{ fontWeight: '700' }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>

          <ul className="dropdown-menu" style={{ backgroundColor: 'rgba(2, 2, 2, 0.312)', backdropFilter: 'blur(0.05px)', color: 'white' }} aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-white" href="./Login">Login</a></li>

            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-white" href=" ">My Orders</a></li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav> */}

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://startuppakistan.com.pk/wp-content/uploads/2021/08/handicrafts-from-pakistan-or-mypakpartner-com.jpeg" alt="  Shantiniketan" className="d-block w-100" style={{ height: '600px' }} />
    
    </div>
    <div className="carousel-item">
    <img src="https://necessityestore.in/wp-content/uploads/2022/10/13.-India_s-Handicraft-Industry-Gaining-Momentum-10-Best-Corporate-Leaders-From-Jaipur-2021.jpg" alt="Uttar Dinajpur" className="d-block w-100" style={{ height: '600px' }} />
    
    </div>
    <div className="carousel-item">
    <img src="https://www.shutterstock.com/image-photo/chhau-or-chhou-mask-kathakali-600nw-1929179270.jpg" alt="South 24 Parganas" className="d-block w-100" style={{ height: '600px' }} />
     
    </div>
    <div className="carousel-item">
    <img src="https://thumbs.dreamstime.com/b/beautiful-painting-pattachitra-patachitra-plates-traditional-cloth-based-scroll-painting-applied-plates-sale-206055177.jpg" alt="Purulia" className="d-block w-100" style={{ height: '600px' }} />
    </div>
    <div className="carousel-item">
    <img src="https://www.shopkhoj.com/wp-content/uploads/2019/01/Terracota-1.jpg" alt="Murshidabad" className="d-block w-100" style={{ height: '600px' }} />
    
    </div>
  </div>
  <button className="carousel-control-prev" style={{ height: "30px", width: "30px", border: "none" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" style={{ height: "30px", width: "30px", border: "none" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>




     </header>
      
      </>
  
    );
    
  }
  export default Menu;