import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Navbar, Slide } from './components';
import {
  Home,
  Shop,
  SingleProduct
} from './views';


const App = () => {
  return (
    <> 
      <BrowserRouter>
        <Navbar/>
        <Slide/>
        <div className='container-sm'>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/shop' element={<Shop/>} />
            <Route exact path='/product/:id' element={<SingleProduct/>} />
            <Route exact path='*' element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App