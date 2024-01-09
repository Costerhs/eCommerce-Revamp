import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../../component/products/Products'
import { getFavoritsThunk } from '../../store/reducers/ActionCreator'
import './style.scss'

const FavoritesPage = () => {
    const favoriteProducts = useSelector(el => el.productReducer.favoritesProduct)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFavoritsThunk())
    }, [])

    return (
        <div className='favorite'>
            <Products title={'Избранные товары'} products={favoriteProducts} />
        </div>
    )
}

export default FavoritesPage