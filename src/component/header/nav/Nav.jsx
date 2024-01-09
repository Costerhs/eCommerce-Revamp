import './style.scss'
import { NavLink } from 'react-router-dom'
import navObj from '../../../assets/localData/headerData'

const Nav = ({ token, location }) => {
    return (
        <div className="head__nav">
            <NavLink to={'/'} className='head__logo'>BuySell.kg</NavLink>
            <div className="head__links">
                {navObj.map((el, ind) => {
                    if (!token && el.private) return
                    return <NavLink key={ind} to={el.location} className={`head__link ${location == el.location && 'head__link-active'}`}>{el.name}</NavLink>
                })}
            </div>
        </div>
    )
}

export default Nav