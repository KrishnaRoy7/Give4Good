import React from 'react';
import '../style/profile.css';

const Profile = () => {
    // Retrieve username and email from localStorage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1 className="profile-name">{username}</h1>
                <p className="profile-email">{email}</p>
            </div>
        </div>
    );
};

export default Profile;
