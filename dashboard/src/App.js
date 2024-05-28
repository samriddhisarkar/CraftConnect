import Home from "../src/Home"
import Dashboard from "../src/Dashboard";
import Item from "../src/Item";
import ListProduct from "../src/ListProduct";
import Update from "../src/Update";
import Adminlogin from "../src/Adminlogin";
import Adminsign from "../src/Adminsign";

import './App.css';
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
function App(){
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Adminlogin />} />
      <Route path="/adminsign" element={<Adminsign />} />
      {/* <Route path="/adminlogin" element={<Adminlogin />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/item" element={<Item />} />
      <Route path="/listproduct" element={<ListProduct />} />
      <Route path="/update/:pid" element={<Update />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;