import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate(); 
  let [admin_name, setAdmin_name] = useState("");

  useEffect(() => {
    var cnn = localStorage.getItem("cn");
    if (cnn != null) {
      setAdmin_name(cnn)
    }
  }, [])

  const handleLogout = () => {
    console.log('Admin logged out');

    localStorage.removeItem("cn");
    localStorage.removeItem("cid");

    // Use replace instead of push to prevent navigation back
    navigate('/', { replace: true });
};


    return(
        <>
            <nav className="navbar p-0 fixed-top d-flex flex-row">
      <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
        <a className="navbar-brand brand-logo-mini" href="../../index.html"><img src="images/logo-mini.svg"  alt="CraftConnect" /></a>
      </div>
      <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">   
        <ul className="navbar-nav navbar-nav-right">       
          <li className="nav-item dropdown">
            <a className="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
              <div className="navbar-profile">
                <img className="img-xs rounded-circle" src="/images/admin.jpeg" alt="Admin" />
                <p className="mb-0 d-none d-sm-block navbar-profile-name">{admin_name}</p>
                <i className="mdi mdi-menu-down d-none d-sm-block" />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-logout text-danger" />
                  </div> 
                </div>
                <div className="preview-item-content">
                  <button className="btn btn-danger" onClick={handleLogout}>Log out</button>
                </div>
              </a>
            </div>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="mdi mdi-format-line-spacing" />
        </button>
      </div>
    </nav>        
        </>
    )
}
export default NavBar;