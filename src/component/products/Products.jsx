import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Category from '../category/Category'
import ProductsList from '../productsList/ProductsList'
import Search from '../search/Search'
import { getCategory, getPartOfProducts } from '../../store/reducers/ActionCreator'
import './style.scss'

const Products = ({ title, products }) => {
    const load = useSelector(el => el.productReducer.load)
    const partOfProduct = useSelector(el => el.productReducer.partOfProduct)
    const [activeCategory, setActiveCategory] = useState(null)
    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getCategory())
    // }, [])
    
    useEffect(() => {
        if(activeCategory || searchText) {
            dispatch(getPartOfProducts({category:activeCategory,searchText:searchText}))
        }
    }, [activeCategory,searchText])

    return (
        <div className='products'>
            <div className="container">
                <div className="products__dif">
                    <Category  setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
                    <Search setSearchText={setSearchText} searchText={searchText} />
                </div>
                <ProductsList title={title}  activeCategory={activeCategory} products={(activeCategory || searchText) ? partOfProduct : products} load={load} />
                {/* <ProductsList  activeCategory={activeCategory} products={(activeCategory || searchText) ? partOfProduct : products} load={load} /> */}
                {/* <ProductsList activeCategory={activeCategory} products={(activeCategory || searchText) ? partOfProduct : products} load={load} /> */}
            </div>
        </div>
    )
}

export default Products
