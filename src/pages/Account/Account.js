import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Sidebar from '../Components/Sidebar.js';
=======
import Sidebar from '../../Components/Sidebar/Sidebar.js';
>>>>>>> e7b14f5c6f8e80f3d71281469c969a7853514687

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
<<<<<<< HEAD
=======
      <h1>Account</h1>
      <Sidebar />
>>>>>>> e7b14f5c6f8e80f3d71281469c969a7853514687
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

// Main Account component for page navigation
const Account = () => {
  const [selectedPage, setSelectedPage] = useState('Account'); // Default selected page is 'Account'

  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };

  return (
    <>
      <h1>Account</h1>
      <Sidebar />
      {selectedPage === 'Account' && <AccountDetails />}
      {/* Add components for other pages as needed */}
    </>
  );
};
<<<<<<< HEAD

=======
>>>>>>> e7b14f5c6f8e80f3d71281469c969a7853514687
export default Account;