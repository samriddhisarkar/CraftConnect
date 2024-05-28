import Sidebar from "./inc/Sidebar";
import NavBar from "./inc/NavBar";
import Footer from "./inc/Footer";
import {useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

function Update(){
  let [product, setProduct] = useState({});
  const params=useParams();
  const navig =useNavigate();
  // async function getPro(){
  //   var id=params.pid;
    
  //   var fd=new FormData();
  //   fd.append("id",id);
    
  //   var resp=await fetch("http://localhost:2000/product/edit",{
  //       method:'POST',
  //       body:fd
  //   });
  //   var data=await resp.json();
  //   console.log(data);
  //   setProduct(data);
  //   setPcat(data.product_cat);
  //   setimgurl(data.product_image);
  //   setPname(data.product_name);
  //   setPrice(data.product_price);
  //   setPdetails(data.product_details);
  //}
  async function getPro() {
    try {
        var id = params.pid;
        var fd = new FormData();
        fd.append("id", id);
        var resp = await fetch("http://localhost:2000/product/edit", {
            method: 'POST',
            body: fd
        });
        if (resp.ok) {
            var data = await resp.json();
            setProduct(data)
            setPcat(data.product_cat);
            setimgurl(data.product_image);
            setPname(data.product_name);
            setPrice(data.product_price);
            setPdetails(data.product_details);
        } else {
            console.error("Error fetching product data:", resp.statusText);
        }
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
}

  useEffect(()=>{
      getPro();
  },[])

  let[pname,setPname]=useState("")
  let[pprice,setPrice]=useState("")
  let[pdetails,setPdetails]=useState("")
  let[pCat, setPcat]=useState("")
  let[pimg,setPimg]=useState(null)
  let[imgurl,setimgurl]=useState("")
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
              <h1 className="h3 mb-4 text-gray-800">Update Items</h1>
              <p style={{ fontWeight: 'bold', color: '#007F7F', fontSize: '20px' }} class="category">Category</p>
        
              <select value={pCat} className="form-control" onChange={(ev)=>{
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

            <p style={{ fontWeight: 'bold', color: '#007F7F', fontSize: '20px' }}>Product Name</p><p><input value={pname} type="text" className="form-control" onChange={(ev)=>{
                setPname(ev.target.value)
            }} style={{backgroundColor: 'lightblue'}}/></p>

            <p style={{ fontWeight: 'bold', color: '#007F7F', fontSize: '20px' }}>Price</p><p><input value={pprice} type="text" className="form-control" onChange={(ev)=>{
                setPrice(ev.target.value)
            }} style={{backgroundColor: 'lightblue'}}/></p>

            <p style={{ fontWeight: 'bold', color: '#007F7F', fontSize: '20px' }}>Product Details</p>
            <p><textarea className="form-control" value={pdetails} onChange={(ev)=>{
                setPdetails(ev.target.value)
            }} style={{backgroundColor: 'lightblue'}}></textarea></p>

            <p><img className="pimg" src={"http://localhost:2000/product_img/"+imgurl}/></p>

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
                fd.append("id",params.pid);
                var resp=await fetch("http://localhost:2000/product/upd",{
                    method:"POST",
                    body:fd
                })
                var data=await resp.json();
                console.log(data);
                navig('/listproduct');
            }}>Update Product</button></p>
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
export default Update;

