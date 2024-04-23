import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import GenderDropdown from './Dropdowns/GenderDropdown.js'; // Updated import
import LetterDropdown from './Dropdowns/LetterDropdown.js';
import LocationDropdown from './Dropdowns/LocationDropdown.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender: '',
      selectedLocation: '',
      selectedLetter: '',
    };
  }

  //Need To Fix 
  handleSelectGender = (selectedOption) => {
    this.setState({ selectedGender: selectedOption.value });
  };

  //Need To Fix 
  handleSubmit = () => {
    const { selectedGender } = this.state;
    console.log('Selected gender:', selectedGender);
    // Add further logic for form submission
  };

  render() {
    return (
      <div className="App">
        <h1>Baby Namer 3000</h1>
        {/* <GenderDropdown onSelectGender={this.handleSelectGender} /> */}
        <GenderDropdown/>
        {/* Add other dropdowns and form elements */}
        <LetterDropdown/>
        {/* Add other dropdowns and form elements */}
        <LocationDropdown/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
export default App;

