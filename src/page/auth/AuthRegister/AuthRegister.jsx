import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { userApi } from '../../../assets/api/api'
import { changeObjToForm, getFilled } from '../../../assets/defFunction/defFunction'
import formsData from '../../../assets/localData/formsData'
import Load from '../../../component/load/Load'
import './style.scss'



const AuthRegister = () => {
    const [isSignIn, setIsSignIn] = useState(false)
    const navigate = useNavigate();
    const [isLoad, setIsLoad] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onClick',
    })


    const onSubmit = async (data) => {
        if (isSignIn) {
            setIsLoad(true)
            await userApi.signIn(data, navigate, setIsLoad)
        } else {
            setIsLoad(true)
            await userApi.register(data, setIsLoad)
        }

    }

    return (
        <div className='authreg'>
            <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
            <form className='authreg__form' onSubmit={handleSubmit(onSubmit)}>
                {formsData.map((el, ind) => {
                    if (isSignIn && (el.name === 'avatar' || el.name === 'phone_number' || el.name === 'birth_date' || el.name === 'username' || el.name === 'about')) return null;
                    return <div key={ind} className="authreg__item">
                        <label htmlFor={el.name} className="authreg__label">{el.title}</label>
                        <input type={el.type} name={el.name} className="authreg__inp" {...register(el.name, el.settings)} />
                        <p className="authreg__error">{errors?.[el.name] ? errors?.[el.name].message : ''}</p>
                    </div>
                })}
                <button type='submit' className='authreg__btn'>Send</button>
                <p className='authreg__acc' onClick={() => setIsSignIn(el => el = !el)}>{isSignIn ? 'Go to register' : 'Have already account?'}</p>
            </form>
            <NavLink to={'/'} className='authreg__link'>На главную</NavLink>
            <Load isLoad={isLoad} />
        </div>
    )
}

export default AuthRegister