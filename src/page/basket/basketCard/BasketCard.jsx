import { useEffect, useState } from 'react'
import './style.scss';
import del from '../../../assets/img/delete.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, deleteBasket, deletePack } from '../../../store/reducers/ActionCreator';


const BasketCard = ({ data, getProductOfBasket }) => {
    const [num, setNum] = useState(1)
    let productsData = data.data[0]
    const dispatch = useDispatch()

    const addBaskets = async () => {
        await dispatch(addBasket(productsData.id))
        getProductOfBasket()
    }
    const delBasket = async () => {
        await dispatch(deleteBasket(data.ids[0]))
        getProductOfBasket()
    }
    const deleteRoom = async () => {
        await dispatch(deletePack(data.ids))
        getProductOfBasket()
    }
    useEffect(() => {
        setNum(data.ids.length)
    }, [data])
    return (
        <div className='bCard'>
            <div className="bCard__img">
                <img src={'https://cryxxen.pythonanywhere.com' + productsData.image} alt="" />
            </div>
            <div className="bCard__description">
                {/* <p className='bCard__category'>Электроника</p> */}
                <p className='bCard__title'>{productsData.title}</p>
            </div>
            <div className="bCard__event">
                <div className="bCard__nums">
                    <button className="bCard__btn" onClick={delBasket}>-</button>
                    <input type="number" value={num} className='bCard__num' />
                    <button className="bCard__btn" onClick={addBaskets}>+</button>
                </div>
                <div className="bCard__sum">
                    {data.total * data.ids.length} сом
                </div>
                <div className="bCard__del" onClick={deleteRoom}>
                    <img src={del} alt="delete" />
                </div>
            </div>
        </div>
    )
}

export default BasketCard