import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import LoaderList from '../../component/loaderOfCard/LoaderList';
import ProductsList from '../../component/productsList/ProductsList';
import { getProducts } from '../../store/reducers/ActionCreator';
import Slider from './slider/Slider';
import './style.scss'

const MainPage = () => {
    const products = useSelector(el => el.productReducer.products)
    const load = useSelector(el => el.productReducer.load)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    useEffect(() => {
        // console.log(products)
    }, [products])

    return (
        <div className='main'>
            <Slider />
            <div className="container">
                <h2>Популярные товары</h2>
                <ProductsList load={load} products={products} />
            </div>
        </div>
    )
}

export default MainPage