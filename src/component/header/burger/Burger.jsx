import { NavLink, useLocation } from 'react-router-dom'
import navObj from '../../../assets/localData/headerData'
import './style.scss'

const Burger = ({ token, location }) => {
    

    return (
        <div className='burger'>
            <h2>BuySell.kg</h2>
            <div className="burger__links">
                {navObj.map((el, ind) => {
                    if (!token && el.private) return
                    return <NavLink  key={ind} to={el.location} className={`burger__link ${location == el.location && 'burger__link-active'}`}>{el.name}</NavLink>
                })}
            </div>
        </div>
    )
}

export default Burger