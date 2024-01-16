import { useEffect, useReducer, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { productApi } from './assets/api/api'
import Footer from './component/foot/Footer'
import Header from './component/header/Header'
import AboutUs from './page/aboutUs/AboutUs'
import Auth from './page/auth/Auth'
import Basket from './page/basket/Basket'
import FavoritesPage from './page/favoritesPage/FavoritesPage'
import MainPage from './page/main/MainPage'
import ProductsPage from './page/productsPage/ProductsPage'
import Profile from './page/profile/Profile'

const App = () => {
  const locat = useLocation();
  const [location, setLocation] = useState(false);
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (locat.pathname === "/auth") {
      setLocation(true);
    } else {
      setLocation(false);
    }
  }, [locat]);



  return (
    <div className="App">
      {!location && <Header />}
      <Routes>
        {token && <>
          <Route path={'/favorites'} element={<FavoritesPage />} />
          {/* <Route path={'/profile'} element={<Profile />} /> */}
          {/* <Route path='/basket' element={<Basket />} /> */}
        </>}
        <Route path='auth' element={<Auth />} />
         <Route path={'/'} element={<MainPage />} />
        <Route path={'/products'} element={<ProductsPage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>
      {!location && <Footer />}
    </div>
  )
}

export default App
