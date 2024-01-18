import './style.scss'
import favorite from '../../assets/img/favorite.svg'
import favoriteEmpty from '../../assets/img/favoriteEmpty.svg'
import { addFavorite, deleteFavorite } from '../../store/reducers/ActionCreator'
import { useDispatch } from 'react-redux'
import { delFavorite } from '../../store/reducers/ProductSlice'
import { SlBasket } from 'react-icons/sl'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'

const Card = ({ data, category }) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')


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
            {category && <div className="card__category">
                {category.name}
            </div>}
            
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