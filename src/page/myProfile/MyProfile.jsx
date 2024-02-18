import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyPost, getUser, getUserPost } from '../../store/reducers/ActionCreator'
import './style.scss'
import ProductsList from '../../component/productsList/ProductsList'




const MyProfile = () => {
    const dispatch = useDispatch()
    const load = useSelector(el => el.userReducer.load)
    const products = useSelector(el => el.productReducer.myProducts)

    useEffect(() => {
        dispatch(getMyPost())
    }, [])

    useEffect(() => {
        console.log(products);
    },[products])

    return (
        <div className='myProfile'>
            <div className="container">
                <h2>Мои обьявления</h2>
                {(products && Object.keys(products).length > 0) && 
                    <ProductsList load={load} products={products} />}
            </div>
        </div>
    )
}

export default MyProfile