import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import TripCatalog from './pages/TripCatalog'
import TourReview from './pages/TourReview'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
const App = ()=>{
  return(
   
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/tripCatalog' element={<TripCatalog />}></Route>
      <Route path='/tourReview' element={<TourReview />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}
export default App

