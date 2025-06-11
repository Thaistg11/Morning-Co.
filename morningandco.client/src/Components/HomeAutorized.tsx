import React, { useState, useEffect } from 'react';


interface UserInfo {
    id: string;
    userName: string;
    email: string;
    firstName: string;
    surname: string;
    dateOfBirth: string;
}

const HomeAuthorized: React.FC = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [searchId, setSearchId] = useState('');
    const [error, setError] = useState('');
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found. Please log in.');
            return;
        }

        fetch('https://localhost:7241/api/Account/my-id', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to get user ID');
                return res.json();
            })
            .then(data => {
                console.log("User ID from backend:", data);
                const actualId = data.id || data.Id;
                setSearchId(actualId);
            })
            .catch((err) => setError(err.message));

    }, []);

    const handleSearch = () => {
        fetch(`https://localhost:7241/api/Account/user/${searchId}`, {
            headers: {

                Authorization: `Bearer ${localStorage.getItem('token')}`,
               
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error('User not found');
                return res.json();
            })
            .then((data) => {
                setUserInfo(data);
                setError('');
            })
            .catch((err) => {
                setUserInfo(null);
                setError(err.message);
            });
    };

    return (
        <div className="homeAutorized-container">


            <div className="search-container"> 
            <div className="form-outline mb-4">
            <input
                type="text"
                id="search-input"
                placeholder="Enter your ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
                <button id="search-button" onClick={handleSearch}>Search</button>
           

            {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>

            <div className="mb-5">

            {userInfo && (
                <div>
                    <p className="user-info">Id: {userInfo.id}</p>
                    <p className="user-info">Username: {userInfo.userName}</p>
                    <p className="user-info" >Email: {userInfo.email}</p>
                    <p className="user-info">First Name: {userInfo.firstName}</p>
                    <p className="user-info">Last Name: {userInfo.surname}</p>
                    <p className="user-info">Date of Birth: {new Date(userInfo.dateOfBirth).toLocaleDateString()}</p>
                </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeAuthorized;
