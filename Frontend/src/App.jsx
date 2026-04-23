import React from 'react'
import Navbar from './component/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Order/PlaceOrder'

const App = () => {
  

  return (
    
  
    <div className='app'>
      <Navbar/>
      
      <Routes>
        
        <Route path="/" element={<Home></Home>} > </Route>
      
        <Route path='/Cart' element={<Cart/>} ></Route>
        <Route path='/Order' element={<PlaceOrder/>} />
        </Routes>
    </div>  
  )
}


export default App
