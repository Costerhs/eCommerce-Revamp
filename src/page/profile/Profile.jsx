import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserLoader from '../../component/loaderOfUser/LoaderOfUser'
import { getUser, getUserPost } from '../../store/reducers/ActionCreator'
import FavoritesPage from '../favoritesPage/FavoritesPage'
import ProfileItem from './ProfileItem'
import './style.scss'
import ProductsList from '../../component/productsList/ProductsList'



const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(el => el.userReducer.user)
    const isLoad = useSelector(el => el.userReducer.isLoading)
    const load = useSelector(el => el.userReducer.load)
    const products = useSelector(el => el.productReducer.partOfProduct)
    useEffect(() => {
        dispatch(getUser(localStorage.getItem('userId')))
        dispatch(getUserPost(localStorage.getItem('userId')))
    }, [])

    return (
        <div className='profile'>
            <div className="profile__info">
                <h2>Мой профиль</h2>
                <div className="container">
                    {isLoad ? <UserLoader /> : <ProfileItem user={user} />}
                </div>
            </div>
            <ProductsList title={"Мои товары"} load={load} products={products} />
        </div>
    )
}

export default Profile