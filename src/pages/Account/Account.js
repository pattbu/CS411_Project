import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar.js';


// Separate component for the Account details
const AccountDetails = () => {
// State to store the username obtained from OAuth
  const [username, setUsername] = useState('');

  // State to store the history of created baby names
  const [babyNamesHistory, setBabyNamesHistory] = useState([]);

  // Simulated function to fetch baby names history
  const fetchBabyNamesHistory = () => {
    // Simulated data for demonstration
    const history = [
      { id: 1, name: 'Emma', gender: 'female', year: 2023 },
      { id: 2, name: 'Liam', gender: 'male', year: 2023 },
      { id: 3, name: 'Olivia', gender: 'female', year: 2022 }
      // Add more history entries as needed
    ];
    setBabyNamesHistory(history);
  };

  useEffect(() => {
    // Simulated username obtained from OAuth
    const oauthUsername = 'JohnDoe'; // Replace 'JohnDoe' with the actual username obtained from OAuth
    setUsername(oauthUsername);

    // Fetch baby names history when the component mounts
    fetchBabyNamesHistory();
  }, []);

  return (
    <>
      <h1>Account</h1>
      <Sidebar />
      <div>
        <h2>Username: {username}</h2>
        <h2>Baby Names History:</h2>
        <ul>
          {babyNamesHistory.map((babyName) => (
            <li key={babyName.id}>{babyName.name} ({babyName.gender}), Year: {babyName.year}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Account;