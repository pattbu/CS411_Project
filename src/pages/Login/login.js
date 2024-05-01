import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar.js';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Make a fetch call to your backend login route here
        try {
            const response = await fetch('/login-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                // Handle successful login, e.g., redirect to dashboard
                console.log('Login successful');
                // Example redirect:
                // history.push('/dashboard');
            } else {
                // Handle unsuccessful login, e.g., display error message
                console.error('Login failed');
                // Example error display:
                // setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            // Handle other errors, e.g., network error
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        // Make a fetch call to your backend signup route here
        try {
            const response = await fetch('/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: signupEmail, password: signupPassword }),
            });

            if (response.ok) {
                // Handle successful signup, e.g., show success message or redirect to login
                console.log('Signup successful');
                // Example success message:
                // setSignupSuccessMessage('Account created successfully. Please login.');
            } else {
                // Handle unsuccessful signup, e.g., display error message
                console.error('Signup failed');
                // Example error display:
                // setSignupErrorMessage('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Signup error:', error);
            // Handle other errors, e.g., network error
        }
    };
	
	const navigate = useNavigate();
	
	const credentialResponse = () => {
		//console.log(credentialResponse);
		//Do stuff here with oauth stuff I guess

		navigate("/");
	}

    return (
	<GoogleOAuthProvider clientId="317132464294-f5d05oi2oooico1m50kkr3i4v5i51nbc.apps.googleusercontent.com">
        <div>
			<GoogleLogin
			  onSuccess={credentialResponse => {
                console.log(credentialResponse);
                
              }}
			  onError={() => {
				console.log('Login Failed');
			  }}
			/>
            <div className="Sidebar">
                <Sidebar />
            </div>
        </div>
	</GoogleOAuthProvider>
    );
};

export default Login;