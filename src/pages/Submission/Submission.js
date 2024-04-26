import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar  from '../../Components/Sidebar/Sidebar';

const Submission = ({ gender, month, day, year }) => {
    const [apiData, setApiData] = useState(null);
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
    
    useEffect(() => {
        const apiUrl = 'https://api.example.com/data';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setApiData(data);
                // Show popup only if data is not null
                if (!data) {
                    setShowPopup(true);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);




    
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <h1>Submission</h1>
            <div className="result-box">
                <h2>API Results</h2>
                {apiData ? (
                    <p>{apiData}</p>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            {/* Popup box for signin/signup */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleClosePopup}>&times;</span>
                        <h2>Sign In / Sign Up</h2>
                        <p>Sign in or sign up to save your results!</p>
                        {/* Add sign in/sign up form here */}
                    </div>
                </div>
            )}
            <div>
                <Sidebar/>
            </div>
        </div>
    );
};

export default Submission;
