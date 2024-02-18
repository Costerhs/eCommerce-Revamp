import './style.scss'
import Card from '../../component/card/Card'
import LoaderList from '../loaderOfCard/LoaderList'
import Pagination from '../pagination/Pagination'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/reducers/ActionCreator'


const ProductsList = ({ load,title, products, activeCategory }) => {
    const [order, setOrder] = useState(1);
    const productListRef = useRef(null);
    const category = useSelector(el => el.productReducer.category)
    const dispatch = useDispatch();

    useEffect(() => {
        //когда меняется категория то пагинация сбрасывается
        setOrder(1)
    }, [activeCategory])

    useEffect(() => {
        if (productListRef.current && order !== 1) {
            productListRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [order]);

    useEffect(() => {
        dispatch(getCategory())
    },[]);

    useEffect(() => {
        setOrder(1)
    }, [])

    return (
        <div className='productsList'>
            <h2>{title}</h2>
            <div className="productsList__list" ref={productListRef}>
                {load && <LoaderList />}
                {products.length > 0 && !load && products.slice((order * 8) - 8, order * 8).map((el, ind) => {
                    return <Card data={el} key={ind} category={category.find(item => item.key == el.category)} />
                })}
                {products.length === 0 && !load && 'Товары отсутствуют'}
            </div>
            {products && products.length && <Pagination lengths={products.length || []} order={order} setOrder={setOrder} />}
        </div>
    )
}

export default ProductsList