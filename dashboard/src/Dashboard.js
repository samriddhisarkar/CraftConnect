import Sidebar from "./inc/Sidebar";
import NavBar from "./inc/NavBar";
import Footer from "./inc/Footer";
import {useState,useEffect} from "react";
function Dashboard(){
  let [admin_name, setAdmin_name] = useState("");

  useEffect(() => {
    var cnn = localStorage.getItem("cn");
    if (cnn != null) {
      setAdmin_name(cnn)
    }
  }, [])
    return(
        <>
            <div className="container-scroller">
             {/* partial:../../partials/_sidebar.html */}
             <Sidebar/>
             {/* partial */}
             <div className="container-fluid page-body-wrapper">
               {/* partial:../../partials/_navbar.html */}
               <NavBar/>
               {/* partial */}
               <div className="main-panel">
                <div className="content-wrapper">
                  <h2 style={{color: "#0096C7", textAlign: "center"}}>Welcome to Dashboard</h2>
                  <h3 style={{color: "#fff", textAlign: "center"}}>{admin_name}</h3>
               </div>
                  {/* content-wrapper ends */}
                  {/* partial:../../partials/_footer.html */}
               <Footer/>
      {/* partial */}
    </div>
    {/* main-panel ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>


        </>
    );
}
export default Dashboard;