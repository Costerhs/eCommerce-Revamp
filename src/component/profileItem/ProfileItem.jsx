import React from 'react'
import './style.scss'

const ProfileItem = ({ user }) => {
    return (
        <div className='profileItem'>
            <div className="profile__img">
                {user.avatar ? <img src={'http://localhost:3000/uploads/' + user.avatar} alt="ava" /> :
                <img src={'https://sneg.top/uploads/posts/2023-06/1687623160_sneg-top-p-otsutstvie-avatarki-pinterest-22.jpg'} alt="ava" />
                }
                
            </div>
            <div className="profile__description">
                <div className="profile__name">
                    {user.username}
                </div>
                <div className="profile__email">
                    <b>Email:</b> {user.email}
                </div>
                <div className="profile__number">
                    <b>Phone Number:</b> {user.phone_number}
                </div>
            </div>
        </div>
    )
}

export default ProfileItem