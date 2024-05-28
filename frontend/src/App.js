// import logo from './logo.svg';
import './App.css';
import Front from './cutomer/Pages/HomePage/Front';
import CartPage from './cutomer/Pages/HomePage/CartPage';
import Information from "./cutomer/Pages/HomePage/Information";
 import Contact from "./cutomer/Pages/HomePage/Contact";
 import Feedback from "./cutomer/Pages/HomePage/Feedback";
 import Donation from "./cutomer/Pages/HomePage/Donation";
import Form from "./cutomer/Pages/HomePage/Form";
import Arform from "./cutomer/Pages/HomePage/Arform";
import Signup from "./cutomer/Pages/HomePage/Signup";
import Login from "./cutomer/Pages/HomePage/Login";
import Fpage from "./cutomer/Pages/HomePage/Fpage";
// import Forgotpass from "./cutomer/Pages/HomePage/Forgotpass";
import Thanks from "./cutomer/Pages/HomePage/Thanks";
import Paydetails from './cutomer/Pages/HomePage/Paydetails';
import Pay from './cutomer/Pages/HomePage/Pay';
import PaymentSuccess from './cutomer/Pages/HomePage/PaymentSuccess';
// import Bills from './Bills'
// import Contact from './cutomer/Pages/HomePage/contact';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      {/*Anuraag*/}
      <Route path="/front" element={<Front />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/paydetails" element={<Paydetails />} />
      {/* Dibya */}
      <Route exact path="/Information" element={<Information/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/Feedback" element={<Feedback/>}/>
        {/*sayantika*/}
        <Route path="/Donation" element={<Donation/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/arform" element={<Arform/>}/>
      <Route path="/signup" element={<Signup/>}/>
      {/* <Route path="/forgotpass" element={<Forgotpass/>}/> */}
      <Route path="/thanks" element={<Thanks/>}/>
      <Route path="/fpage" element={<Fpage/>}/>
      {/*samriddhi*/}
      <Route path='/pay' element={<Pay/>}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;