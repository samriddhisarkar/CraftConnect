import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Home'
import PaymentSuccess from './PaymentSuccess'
import Bills from './Bills'
// secret =WeVuFA0MijnWwTXcIvI9xQ55
// keyid=rzp_test_1NdqZOSQdTLlim

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
        <Route path='/bills' element={<Bills/>}/>
       
      </Routes>
    </Router>
  )
}

export default App