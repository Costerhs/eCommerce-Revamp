import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../../component/products/Products'
import { getProducts } from '../../store/reducers/ActionCreator'
import './style.scss'

const ProductsPage = () => {
  const products = useSelector(el => el.productReducer.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div>
      <Products title={'Товары'} products={products} />
    </div>
  )
}

export default ProductsPage