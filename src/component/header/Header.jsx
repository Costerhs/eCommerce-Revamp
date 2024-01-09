import './style.scss'
import { MdFavorite } from 'react-icons/md'
import { BsBasketFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import Burger from './burger/Burger'
import Nav from './nav/Nav'
import { RxAvatar } from 'react-icons/rx'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { IoMdExit } from 'react-icons/io'

const Header = () => {
    const token = localStorage.getItem('token')
    const location = useLocation().pathname
    const [isBurger, setIsBurger] = useState(false)

    useEffect(() => {
        setIsBurger(false)
    }, [location])
    const logOut = () => {
        localStorage.clear()
    }

    return (
        <div className='head'>
            {isBurger && <Burger token={token} location={location} />}
            <div className="head__line"></div>
            <div className="container">
                <Nav location={location} token={token} />
                <div className="head__user">

                    {/* <img src={localStorage.getItem("avatarka")} alt='avatar' />
                    <p>{localStorage.getItem('username')}</p> */}
                    {token ? <>
                        <div className="head__icons">
                            <NavLink to={'favorites/'}>
                                <MdFavorite className='head__icon' />
                            </NavLink>
                            <NavLink to={'basket/'}>
                                <BsBasketFill className='head__icon' />
                            </NavLink>
                        </div>
                        <NavLink to={'/profile'}>
                            <RxAvatar className='head__icon-ava' />
                        </NavLink>
                        <NavLink to={'/auth'}>
                            <IoMdExit onClick={logOut} className='head__icon-exit' />
                        </NavLink>
                    </> :
                        <NavLink to={'/auth'} className='head__login'>SignUp/SingIn</NavLink>
                    }
                    {isBurger ? <RxCross1 onClick={() => setIsBurger(false)} className='head__icon head__menu-btn' /> : <GiHamburgerMenu onClick={() => setIsBurger(true)} className='head__icon head__menu-btn' />}

                </div>
            </div>
            <div className="head__line-bot"></div>
        </div>
    )
}

export default Header