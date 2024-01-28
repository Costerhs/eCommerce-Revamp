import './style.scss'
import favorite from '../../assets/img/favorite.svg'
import favoriteEmpty from '../../assets/img/favoriteEmpty.svg'
import { addFavorite, deleteFavorite } from '../../store/reducers/ActionCreator'
import { useDispatch } from 'react-redux'
import { delFavorite } from '../../store/reducers/ProductSlice'
import { SlBasket } from 'react-icons/sl'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Card = ({ data, category }) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const location = useLocation();
    const isProfilePage = location.pathname.includes('/profile');
    
    const favoriteF = () => {
        if (data.isFavorite) {
            dispatch(deleteFavorite(data._id))
        } else {
            dispatch(addFavorite(data._id))
        }
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
                            {/* <button className="card__btn card__btn--active" >{data.status ? "Активировать" : 'Деактивировать'}</button> */}
                            <button className={`card__btn ${data.status ? "card__btn--deactive" : "card__btn--active"}`} >{data.status ? "Деактивировать" : 'Активировать'}</button>
                        </div>
                    }
            </div>

        </div>
    )
}

export default Card