import React from 'react'

const ProfileItem = ({ user }) => {
    return (
        <>
            <div className="profile__img">
                <img src={'https://cryxxen.pythonanywhere.com/' + user.avatarka} alt="ava" />
            </div>
            <div className="profile__description">
                <div className="profile__name">
                    username: {user.username}
                </div>
                <div className="profile__double">
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.phone_number}</p>
                </div>
                <div className="profile__birth">
                    Birth Date: {user.birth_date}
                </div>
                <div className="profile__about">
                    About: {user.about}
                </div>
            </div>
        </>
    )
}

export default ProfileItem