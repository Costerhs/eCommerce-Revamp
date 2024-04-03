import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductsList from '../../component/productsList/ProductsList';
import { getProducts } from '../../store/reducers/ActionCreator';
import Slider from './slider/Slider';
import './style.scss'
import Swipers from '../../component/swiper/Swipers';

const MainPage = () => {
    const products = useSelector(el => el.productReducer.products)
    const load = useSelector(el => el.productReducer.load)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className='main'>
            <Swipers />
            {/* <Slider /> */}
            <div className="container">
                <h2>Популярные товары</h2>
                <ProductsList load={load} products={products} />
            </div>
        </div>
    )
}

export default MainPage