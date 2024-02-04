import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserLoader from '../../component/loaderOfUser/LoaderOfUser'
import { getUser, getUserPost } from '../../store/reducers/ActionCreator'
import FavoritesPage from '../favoritesPage/FavoritesPage'
import ProfileItem from './ProfileItem'
import './style.scss'
import ProductsList from '../../component/productsList/ProductsList'
import { useLocation, useParams } from 'react-router-dom'



const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(el => el.userReducer.user)
    const isLoad = useSelector(el => el.userReducer.isLoading)
    const load = useSelector(el => el.userReducer.load)
    const products = useSelector(el => el.productReducer.userProduct)
    const [status,setStatus] = useState(true);
    const userId = useParams().userId

    useEffect(() => {
        dispatch(getUser(userId))
        dispatch(getUserPost(userId))
    }, [])

    return (
        <div className='profile'>
            <div className="container">
                {isLoad ? <UserLoader /> : <ProfileItem user={user} />}
                <ul className="profile__status">
                    <li onClick={() => setStatus(true)} className={`${status ? "profile__status--active" : "profile__btn"}`}>Активно</li>
                    <li onClick={() => setStatus(false)} className={`${!status ? "profile__status--active" : "profile__btn"}`}>Деактивно</li>
                </ul>
                {(products && Object.keys(products).length > 0) && 
                    <ProductsList load={load} products={status ? products.activePost : products.inactivePost} />}
            </div>
        </div>
    )
}

export default Profile
// {(products && Object.keys(products).length > 0) && status ? (
//     <ProductsList load={load} products={products.activePost} />
// ) : (
//     <ProductsList load={load} products={products.inactivePost} />
// )}