import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyPost, getUser, getUserPost } from '../../store/reducers/ActionCreator'
import './style.scss'
import ProductsList from '../../component/productsList/ProductsList'
import ProfileItem from '../../component/profileItem/ProfileItem'




const MyProfile = () => {
    const dispatch = useDispatch()
    const load = useSelector(el => el.userReducer.load)
    const products = useSelector(el => el.productReducer.myProducts)
    const user = useSelector(el => el.userReducer.user)

    useEffect(() => {
        dispatch(getMyPost())
        dispatch(getUser(localStorage.getItem('userId')))
    }, [])


    return (
        <div className='myProfile'>
            <div className="container">
                <ProfileItem user={user}/>
                <h2>Мои обьявления</h2>
                {(products && Object.keys(products).length > 0) && 
                    <ProductsList load={load} products={products} />}
            </div>
        </div>
    )
}

export default MyProfile