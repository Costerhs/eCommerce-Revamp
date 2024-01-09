import './style.scss'
import { IoMdBusiness } from 'react-icons/io'
import { MdSell } from 'react-icons/md'
import { GiBuyCard } from 'react-icons/gi'

const AuthInfo = () => {
    return (
        <div className="auth__info">
            <div className="auth__info-title">
                BuySell.kg
            </div>
            <div className="auth__description">
                <p><MdSell className='icon' />Продавайте свои товары или услуги</p>
                <p><GiBuyCard className='icon' />Покупайте товары или услуги</p>
                <p><IoMdBusiness className='icon' />Создайте свой бизнес</p>
            </div>
        </div>
    )
}

export default AuthInfo