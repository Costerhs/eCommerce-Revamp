import { useEffect } from 'react';
import './style.scss'

const DetailPageContact = ({data}) => {
    return (
            <div className="detailPage__contact">
                <div className="detailPage__info">
                    <div className="detailPage__photo">
                        <img src={'http://localhost:3000/uploads/'+data.avatar} alt="Фото продавца"  />
                    </div>
                    <div className="detailPage__details">
                        <p className="detailPage__name">{data.username}</p>
                        <p className="detailPage__phone">Номер телефона: +{data.phone_number} </p>
                        <button className="share__button">Поделиться</button>
                    </div>
                </div>
            </div>
    )
}

export default DetailPageContact;