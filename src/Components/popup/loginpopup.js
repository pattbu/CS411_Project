import React from 'react';

const LoginPopup = ({ showPopup, setShowPopup }) => {
    const handleClosePopup = () => {
        setShowPopup(false); // Use setShowPopup as a function to update state
    };

    return (
        <div className="Login">
            {showPopup && (
                <div className="popup"> 
                    <div className="popup_background">   
                        <div className="popup-content">
                            <span className="popup_close" onClick={handleClosePopup}>&times;</span>
                            <h2>Sign In / Sign Up</h2>
                            <a href="/login">Sign In / Sign Up</a>
                            <p>Sign in or sign up to save your results!</p>
                            {/* Add sign in/sign up form here */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    ); 
};

export default LoginPopup;
