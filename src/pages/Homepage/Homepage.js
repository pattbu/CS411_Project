import './Homepage.css';
import React, { useState } from 'react';
import GenderDropdown from '../../Components/Dropdowns/GenderDropdown.js';
import Sidebar from '../../Components/Sidebar/Sidebar.js';
import DateDropdown from '../../Components/Dropdowns/Datedropdown.js';
import { useNavigate } from "react-router-dom";


const Homepage = (props) => {
  const {loggedIn, email} = props
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSelectGender = (selectedOption) => {
    setSelectedGender(selectedOption);
  };

  const handleSelectMonth = (selectedOption) => {
    setSelectedMonth(selectedOption);
  };

  const handleSelectDay = (selectedOption) => {
    setSelectedDay(selectedOption);
  };

  const handleSelectYear = (selectedOption) => {
    setSelectedYear(selectedOption);
  };

  const handleSubmit = () => {
    if (selectedGender && selectedMonth && selectedDay && selectedYear) {
      let submissionURL = `/submission?gender=${selectedGender}&month=${selectedMonth}&year=${selectedYear}`;
      if (selectedDay) {
        submissionURL += `&day=${selectedDay}`;
      }
      navigate(submissionURL);
    } else {
      setErrorMessage('Please select all dropdown menus before submitting.');
    }
  };

  const loginbutton = () =>{
    if(0){

    }
  };

  return (
    <div classname="App">
	<div class="background"></div>
      <h1>Baby Namer 3000</h1>
      <GenderDropdown onSelectedGender={handleSelectGender} />
      <DateDropdown
        onSelectYear={handleSelectYear}
        onSelectMonth={handleSelectMonth}
        onSelectDay={handleSelectDay}
      />
      <button onClick={handleSubmit}>Submit</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Login">
        <div className={'buttonContainer'}>
          <input
              className={'inputButton'}
              type="button"
              onClick={loginbutton}
              value={loggedIn ? 'Log out' : 'Log in'}
          />
           {loggedIn ? <div>Your email address is {email}</div> : <div />}
        </div>

      </div>
    </div>
  );
};

export default Homepage;
