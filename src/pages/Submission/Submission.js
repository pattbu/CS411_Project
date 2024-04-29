import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar  from '../../Components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';


const Submission = () => {
    const [apiData, setApiData] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const gender = params.get('gender');
    const month = params.get('month');
    const day = params.get('day');
    const year = params.get('year');

    useEffect(() => {
        console.log(gender, month, day, year);
        fetchBabyName(gender, day);
    },[gender, day]);

    const fetchBabyName = async (gender, day) => {
        try {
            const response = await fetch(`/api/babynames?gender=${gender}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setApiData(data);
      /*
          let result = '';
          if (day > 0 && day <= 10) {
            result = data[day];
          } else if (day > 10 && day <= 20) {
            result = data[day - 10];
          } else if (day > 20 && day <= 30) {
            result = data[day - 20];
          } else {
            result = data[0];
          }
          return result;
    */  
        } catch (error) {
          console.error('Error fetching baby name:', error);
          setApiData(null);
        }
    };

    
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
                    <p>Loading...{gender}</p>
                    
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
            <div className="api-results">
                {apiData && (
                    <div>
                        <h2>API Results</h2>
                        <p>{apiData}</p>
                        {/* Add additional content here for API results */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Submission;
