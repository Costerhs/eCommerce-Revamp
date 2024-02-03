import './style.scss'
import favorite from '../../assets/img/favorite.svg'
import favoriteEmpty from '../../assets/img/favoriteEmpty.svg'
import { addFavorite, deleteFavorite } from '../../store/reducers/ActionCreator'
import { useDispatch } from 'react-redux'
import { useLocation,} from 'react-router-dom'
import { productApi } from '../../assets/api/api'
import { useState } from 'react'

const Card = ({ data, category }) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const location = useLocation();
    const isProfilePage = location.pathname.includes('/profile');
    const [status,setStatus] = useState(data.status);

    const favoriteF = () => {
        if (data.isFavorite) {
            dispatch(deleteFavorite(data._id))
        } else {
            dispatch(addFavorite(data._id))
        }
    }

    const toggleStatus = async() => {
        await productApi.toggleStatus(!status,data._id)
        .then(() => {
            setStatus(!status)
        })
    }

    return (
        <div className='card'>
            <div className="card__btns">
                {token && <><img src={data.isFavorite ? favorite : favoriteEmpty}
                    alt="favorite"
                    onClick={favoriteF} /></>}

            </div>
            <div className="card__img">
                <img src={`http://localhost:3000/uploads/${data.image}`} alt="img" />
            </div>
            <div className="card__description">
                    {category && <div className="card__category">
                        {category.name}
                    </div>}
                    
                    <div className="card__title">
                        {data.title}
                    </div>
                    <div className="card__price">
                        {data.price} сом
                    </div>
                    {isProfilePage &&
                        <div className="card__active">
                            <button onClick={() => toggleStatus()} className={`card__btn ${status ? "card__btn--deactive" : "card__btn--active"}`} >{status ? "Деактивировать" : 'Активировать'}</button>
                        </div>
                    }
            </div>

        </div>
    )
}

export default Card