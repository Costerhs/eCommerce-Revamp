import './style.scss'
import pr from '../../assets/localData/pr'
import BasketCard from './basketCard/BasketCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { deletePack, getBasket } from '../../store/reducers/ActionCreator'
import Load from '../../component/load/Load'

const Basket = () => {
    const dispatch = useDispatch()
    const products = useSelector(el => Object.values(el.productReducer.basketProducts))
    const sum = useSelector(el => el.productReducer.sum)
    const load = useSelector(el => el.productReducer.loadBasket)

    const getProductOfBasket = () => {
        dispatch(getBasket())
    }

    useEffect(() => {
        getProductOfBasket()
    }, [])
    useEffect(() => {
        let red = []
        products.map(el => {
            red = red.concat(el.ids)
        })
        // console.log(red)
    }, [products])
    const deleteAll = async () => {
        let allIds = []
        products.map(el => {
            allIds = allIds.concat(el.ids)
        })
        await dispatch(deletePack(allIds))
        getProductOfBasket()
    }
    return (
        <div className='basket'>
            <div className="container">
                <div className="basket__title">
                    <h1>Корзина</h1>
                    <p><span>В сумме:</span> {sum} сом</p>
                </div>
                <div className="basket__list">
                    {products.map((el, ind) => {
                        return <BasketCard getProductOfBasket={getProductOfBasket} key={ind} data={el} />
                    })}
                    <div className="basket__delete-all-container">
                        {products.length >= 1 ? <button onClick={deleteAll} className="basket__delete-all">Удалить все</button> :
                            <p>Товары в корзине отсутствуют</p>
                        }
                    </div>
                </div>
            </div>
            <Load isLoad={load} />
        </div>
    )
}

export default Basket