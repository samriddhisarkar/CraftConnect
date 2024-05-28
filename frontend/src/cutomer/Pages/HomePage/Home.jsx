import { useState, useEffect } from "react";
import './Home.css'; // Import CSS file for styling
import { useCart } from "./cart";
import toast from "react-hot-toast";
export default function Home() {
  const [cart, setCart] = useCart();
  let [prd, setPrd] = useState([]);
  async function getProduct() {
    var data = await fetch('http://localhost:2000/product/sel');
    var result = await data.json();
    setPrd(result);
  }

  useEffect(() => {
    getProduct();
  }, []);


  return (
    <div className="container mt-3">
      <h2 className="title" style={{fontSize:"30px", textAlign:"center"}}>Products</h2>
      <div className="card-container">
        {prd.map((k) => (
          <div key={k.product_id} className="card">
            <img className="card-img-top" src={"http://localhost:2000/product_img/" + k.product_image} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">{k.product_name}</h4>
              <p className="card-text">{k.product_price}</p>
              <p className="card-text">{k.product_details}</p>
              <div className="button"><button onClick={()=>{setCart([...cart,k]);localStorage.setItem('cart', JSON.stringify([...cart, k]));toast.success('Item added to cart');}}>Add to cart</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

