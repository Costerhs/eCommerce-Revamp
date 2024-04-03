import './style.scss'
import favorite from '../../assets/img/favorite.svg'
import favoriteEmpty from '../../assets/img/favoriteEmpty.svg'
import { addFavorite, deleteFavorite, deleteProduct, toggleStatusOfProduct } from '../../store/reducers/ActionCreator'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation, useNavigate,} from 'react-router-dom'
import { productApi } from '../../assets/api/api'
import { useState } from 'react'

const Card = ({ data, category }) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const location = useLocation();
    const isProfilePage = location.pathname.includes('/myProfile');
    const navigate = useNavigate();

    const favoriteF = () => {
        if (data.isFavorite) {
            dispatch(deleteFavorite(data._id))
        } else {
            dispatch(addFavorite(data._id))
        }
    }

    const toggleStatus = async(e) => {
        dispatch(toggleStatusOfProduct({status:data.status,productId:data._id}))
    }

    const redirect = (e) => {
        // console.log(e.target.className);
        if(e.target.tagName !== 'BUTTON' && e.target.className !== 'card__favorite-img') {
            navigate(`/detailPage/${data._id}`)
        }
    }

    const deleteThisProduct = async() => {
        dispatch(deleteProduct(data._id))
    }

    return (
        <div className='card' onClick={redirect}>
            <div className="card__btns">
                {token && !isProfilePage && <><img src={data.isFavorite ? favorite : favoriteEmpty}
                    alt="favorite"
                    className='card__favorite-img'
                    onClick={favoriteF} /></>}

            </div>
            <div className="card__img">
                <img src={`https://marketapi-uje5.onrender.com/uploads/${data.images[0]}`} alt="img" />
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
                        <>
                        <div className="card__active">
                            <button onClick={() => toggleStatus()} className={`card__btn ${data.status ? "card__btn--deactive" : "card__btn--active"}`} >{data.status ? "Деактивировать" : 'Активировать'}</button>
                        </div>
                        <div className="card__delete">
                            <button onClick={() => deleteThisProduct()} className='card__delete-btn' >Удалить</button>
                        </div>
                        
                        </>
                    }
            </div>

        </div>
    )
}

export default Card