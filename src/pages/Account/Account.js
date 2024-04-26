import React, { useState, useEffect } from 'react';
<<<<<<< HEAD:src/pages/Account.js
import Sidebar from '../Components/Sidebar.js';
=======
import Sidebar from '../../Components/Sidebar/Sidebar.js';

>>>>>>> 06d714ce801a397a3998c7462d08a1f7475cbf06:src/pages/Account/Account.js

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
<<<<<<< HEAD:src/pages/Account.js

=======
      <h1>Account</h1>
      <Sidebar />
>>>>>>> 06d714ce801a397a3998c7462d08a1f7475cbf06:src/pages/Account/Account.js
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

<<<<<<< HEAD:src/pages/Account.js
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

=======
>>>>>>> 06d714ce801a397a3998c7462d08a1f7475cbf06:src/pages/Account/Account.js
export default Account;