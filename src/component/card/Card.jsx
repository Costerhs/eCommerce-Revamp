import './style.scss'
import favorite from '../../assets/img/favorite.svg'
import favoriteEmpty from '../../assets/img/favoriteEmpty.svg'
import { addBasket, addFavorite, deleteFavorite } from '../../store/reducers/ActionCreator'
import { useDispatch } from 'react-redux'
import { delFavorite } from '../../store/reducers/ProductSlice'
import { SlBasket } from 'react-icons/sl'
import Swal from 'sweetalert2'

const Card = ({ data, isDel }) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const favoriteF = () => {
        if (isDel >= 1) {
            dispatch(delFavorite({ id: data.id, arr: 'favoritesProduct' }))
            dispatch(deleteFavorite(data.deleteId))
        } else {
            dispatch(addFavorite(data.id))
        }
    }
    const addBaskets = async() => {
        await dispatch(addBasket(data.id))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Успешно добавлено в корзину'
        })
    }


    return (
        <div className='card'>
            <div className="card__btns">
                {token && <><img src={data.deleteId ? favorite : favoriteEmpty}
                    alt="favorite"
                    onClick={favoriteF} />
                    <SlBasket className='card__del' onClick={addBaskets} /></>}

            </div>
            <div className="card__img">
                <img src={data.image} alt="img" />
            </div>
            <div className="card__title">
                {data.title}
            </div>
            <div className="card__price">
                {data.price} сом
            </div>

        </div>
    )
}

export default Card