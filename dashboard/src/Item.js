import Sidebar from "./inc/Sidebar";
import NavBar from "./inc/NavBar";
import Footer from "./inc/Footer";
import {useState} from "react";

function Item(){
  let[pname,setPname]=useState("")
  let[pprice,setPrice]=useState("")
  let[pdetails,setPdetails]=useState("")
  let[pCat, setPcat]=useState("")
  let[pimg,setPimg]=useState(null)
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
                <div className="container-fluid">
              <h1 className="h3 mb-4 text-gray-800">Add Items</h1>
              <p style={{ fontWeight: 'bold', color: '#007F7F', fontSize: '20px' }} class="category">Category</p>
        
              <select className="form-control" onChange={(ev)=>{
              setPcat(ev.target.value)
              }} style={{backgroundColor: 'lightblue'}}>
              <option value="">-Select Category-</option>
              <option value="Paintings">Paintings</option>
              <option value="Utensils">Utensils</option>
              <option value="Jewellery">Jewellery</option>
              <option value="CLothing">Clothing</option>
              <option value="Decorations">Decorations</option>
              <option value="Bags">Bags</option>
              <option value="Furniture">Furniture</option>
              </select>
            
            <p style={{ fontWeight: 'bold', color: '#007F7F', fontSize: '20px' }}>Image</p>
            <p><input type="file" onChange={(ev)=>{
                setPimg(ev.target.files[0])
            }} style={{backgroundColor: 'lightblue'}}/></p>

            <p style={{ fontWeight: 'bold', color: '#007F7F', fontSize: '20px' }}>Product Name</p><p><input type="text" className="form-control" onChange={(ev)=>{
                setPname(ev.target.value)
            }} style={{backgroundColor: 'lightblue'}}/></p>

            <p style={{ fontWeight: 'bold', color: '#007F7F', fontSize: '20px' }}>Price</p><p><input type="text" className="form-control" onChange={(ev)=>{
                setPrice(ev.target.value)
            }} style={{backgroundColor: 'lightblue'}}/></p>

            <p style={{ fontWeight: 'bold', color: '#007F7F', fontSize: '20px' }}>Product Details</p>
            <p><textarea className="form-control" onChange={(ev)=>{
                setPdetails(ev.target.value)
            }} style={{backgroundColor: 'lightblue'}}></textarea></p>

            <p><button className="btn btn-success" onClick={async()=>{
                //console.log(pCat)
                //console.log(pname)
                //console.log(pprice)
                //console.log(pdetails)
                var fd=new FormData();
                fd.append("pCat",pCat);
                fd.append("pname",pname);
                fd.append("pprice",pprice);
                fd.append("pdetails",pdetails);
                fd.append("pimg",pimg);
                var resp=await fetch("http://localhost:2000/product/ins",{
                    method:"POST",
                    body:fd
                })
                var data=await resp.json();
                console.log(data);
                
            }}>Add Product</button></p>
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
export default Item;