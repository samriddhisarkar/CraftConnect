import Sidebar from "./inc/Sidebar";
import NavBar from "./inc/NavBar";
import Footer from "./inc/Footer";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
function ListProduct(){

    let [products, setProducts] = useState([]);

    async function getProduct(){
        var resp=await fetch("http://localhost:2000/product/sel");
                var data=await resp.json();
                setProducts(data);
                console.log(data);
    }

    useEffect(()=>{
        getProduct();
    },[])

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
                <div className="table-responsive">
                <table className="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Product Details</th>
                  </tr>
                </thead>
                <tbody>
                {products.map((p) =>
                  <tr key={p._id}>
                    <td>{p.product_cat}</td>
                    <td><img className="pimg" src={"http://localhost:2000/product_img/"+p.product_image}/></td>
                    <td>{p.product_name}</td>
                    <td>{p.product_price}</td>
                    <td>{p.product_details}</td>
                    <td><button className="btn btn-danger" onClick={async()=>{
                    if(window.confirm("Are you sure you want to delete?")){
                        var fd=new FormData();
                        fd.append("pid",p._id);
                        var resp= await fetch("http://localhost:2000/product/del",{
                            method:"POST",
                            body:fd
                        });
                        var data=await resp.json();
                        console.log(data);
                    }
                    }}>Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button></td>
                  <td><Link to={"/update/"+p._id} type="button" className="btn btn-success">Update</Link></td>  
                 </tr>
                )}
                </tbody>
                </table>
                </div>
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
export default ListProduct;