import { useEffect, useReducer, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { productApi } from './assets/api/api'
import Footer from './component/foot/Footer'
import Header from './component/header/Header'
import AboutUs from './page/aboutUs/AboutUs'
import Auth from './page/auth/Auth'
import FavoritesPage from './page/favoritesPage/FavoritesPage'
import MainPage from './page/main/MainPage'
import ProductsPage from './page/productsPage/ProductsPage'
import Profile from './page/profile/Profile'
import CreatePost from './page/createPost/CreatePost'
import DetailPage from './page/detailPage/detailPage'
import MyProfile from './page/myProfile/MyProfile'
import ScrollUp from './component/scrollUp/ScrollUp'

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
        <ScrollUp />
        <Routes>
        {token && <>
          <Route path={'/favorites'} element={<FavoritesPage />} />
          <Route path='/createPost' element={<CreatePost />}/>
          <Route path='/myProfile' element={<MyProfile />} />
        </>}
        <Route path='auth' element={<Auth />} />
         <Route path={'/'} element={<MainPage />} />
        <Route path={'/products'} element={<ProductsPage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/detailPage/:id' element={<DetailPage />} />
        <Route path={'/profile/:userId'} element={<Profile />} />

      </Routes>
      {!location && <Footer />}
    </div>
  )
}

export default App
