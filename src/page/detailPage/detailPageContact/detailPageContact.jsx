import { useEffect } from 'react';
import './style.scss'
import { NavLink } from 'react-router-dom';

const DetailPageContact = ({data}) => {
    return (
            <div className="detailPage__contact">
                <div className="detailPage__info">
                    <NavLink to={`/profile/${data._id}`} className="detailPage__photo">
                        <img src={'https://marketapi-uje5.onrender.com/uploads/'+data.avatar} alt="Фото продавца"  />
                    </NavLink>
                    <div className="detailPage__details">
                        <NavLink to={`/profile/${data._id}`} className="detailPage__name">{data.username}</NavLink>
                        <p className="detailPage__phone">Номер телефона: +{data.phone_number} </p>
                        <button className="share__button">Поделиться</button>
                    </div>
                </div>
            </div>
    )
}

export default DetailPageContact;