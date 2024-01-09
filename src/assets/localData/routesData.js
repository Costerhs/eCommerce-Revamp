import AboutUs from "../../page/aboutUs/AboutUs";
import Basket from "../../page/basket/Basket";
import FavoritesPage from "../../page/favoritesPage/FavoritesPage";
import MainPage from "../../page/main/MainPage";
import ProductsPage from "../../page/productsPage/ProductsPage";
import Profile from "../../page/profile/Profile";


let publicRoute = [
    { path: '/', element: MainPage },
    { path: '/aboutUs', element: AboutUs },
    { path: '/products', element: ProductsPage }
]
let privateRoute = [
    { path: '/favorites', element: FavoritesPage },
    { path: '/profile', element: Profile },
    { path: '/basket', element: Basket }
]
export { privateRoute, publicRoute }
/* <Route path='auth' element={<Auth />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/products'} element={<ProductsPage />} />
        <Route path={'/favorites'} element={<FavoritesPage />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/aboutUs' element={<AboutUs />} />*/