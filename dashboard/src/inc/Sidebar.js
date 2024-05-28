import { NavLink } from "react-router-dom";
function Sidebar(){
    return(
        <>
         <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
      <p className="sidebar-brand brand-logo">CraftConnect</p>
    </div>
    <ul className="nav">
      <li className="nav-item profile">
        <div className="profile-desc">
          <div className="profile-pic">
            <div className="profile-name">
              <h5 className="mb-0 font-weight-normal">Admin</h5>
            </div>
          </div>
          <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical" /></a>
          <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
            <a href="#" className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-settings text-primary" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-onepassword  text-info" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-calendar-today text-success" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item nav-category">
        <span className="nav-link">Navigation</span>
      </li>
      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="/dashboard">
          <span className="menu-icon">
            <i className="mdi mdi-speedometer" />
          </span>
          <span className="menu-title">Dashboard</span>
        </NavLink>
      </li>
      <li className="nav-item menu-items">
        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <span className="menu-icon">
            <i className="mdi mdi-laptop" />
          </span>
          <span className="menu-title">Manage Items</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="ui-basic">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <NavLink className="nav-link" to="/Item">Add Items</NavLink></li>
            <li className="nav-item"> <NavLink className="nav-link" to="/ListProduct">View Items</NavLink></li>

          </ul>
        </div>
      </li>
    
    </ul>
  </nav>
        </>
    )
}
export default Sidebar;