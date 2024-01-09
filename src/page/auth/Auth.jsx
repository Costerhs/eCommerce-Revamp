import React from 'react'
import './style.scss'

import AuthInfo from './authInfo/AuthInfo'
import AuthRegister from './AuthRegister/AuthRegister'

const Auth = () => {
    return (
        <div className='auth'>
            <AuthInfo />
            <AuthRegister />
        </div>
    )
}

export default Auth