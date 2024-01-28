import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../../component/products/Products'
import { getFavoritsThunk } from '../../store/reducers/ActionCreator'
import './style.scss'
import ProductsList from '../../component/productsList/ProductsList'

const FavoritesPage = () => {
    const favoriteProducts = useSelector(el => el.productReducer.partOfProduct)
    const load = useSelector(el => el.productReducer.load)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFavoritsThunk())
    }, [])

    return (
        <div className='favorite'>
            <ProductsList title={'Избранные товары'} products={favoriteProducts} load={load}/>
        </div>
    )
}

export default FavoritesPage