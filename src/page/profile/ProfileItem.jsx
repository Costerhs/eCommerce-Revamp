import React from 'react'

const ProfileItem = ({ user }) => {
    return (
        <div className='profileItem'>
            <div className="profile__img">
                <img src={'https://marketapi-uje5.onrender.com/uploads/' + user.avatar} alt="ava" />
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
                {/* <div className="profile__double">
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.phone_number}</p>
                </div> */}
                {/* <div className="profile__birth">
                    Birth Date: {user.birth_date}
                </div> */}
                {/* <div className="profile__about">
                    About: {user.about}
                </div> */}
            </div>
        </div>
    )
}

export default ProfileItem