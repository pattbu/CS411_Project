import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar  from '../../Components/Sidebar/Sidebar';

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://day-special-finder-api.p.rapidapi.com/all/04/30',
  headers: {
    'X-RapidAPI-Key': 'f3ecad7dd9mshd03659d07014c7cp1e6a74jsn817e07d03b3d',
    'X-RapidAPI-Host': 'day-special-finder-api.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


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


export default Submission;
