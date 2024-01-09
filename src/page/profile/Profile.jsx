import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserLoader from '../../component/loaderOfUser/LoaderOfUser'
import { getUser } from '../../store/reducers/ActionCreator'
import FavoritesPage from '../favoritesPage/FavoritesPage'
import ProfileItem from './ProfileItem'
import './style.scss'



const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(el => el.userReducer.user)
    const isLoad = useSelector(el => el.userReducer.isLoading)
    useEffect(() => {
        dispatch(getUser(localStorage.getItem('userId')))
    }, [])

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className='profile'>
            <div className="profile__info">
                <div className="container">
                    {isLoad ? <UserLoader /> : <ProfileItem user={user} />}
                </div>
            </div>
            <FavoritesPage />
        </div>
    )
}

export default Profile