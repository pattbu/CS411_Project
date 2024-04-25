import './Homepage.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import GenderDropdown from '../Dropdowns/GenderDropdown.js';
import LetterDropdown from '../Dropdowns/LetterDropdown.js';
import LocationDropdown from '../Dropdowns/LocationDropdown.js';
import axios from 'axios';

class Homepage extends React.Component {
    // const [addClick,setAddClick] = React.useState("");
    //use the state variable to store and and save it make the axios reuqest in which the ""
    constructor(props) {
        super(props);
        this.state = {
          selectedGender: null,
          selectedLocation: null,
          selectedLetter: null,
        };
      }
      handleSelectGender = (selectedOption) => {
        this.setState({ selectedGender: selectedOption.value });
      };
    
      handleSelectLetter = (selectedOption) => {
        this.setState({ selectedLetter: selectedOption.value });
      };
    
      handleSelectLocation = (selectedOption) => {
        this.setState({ selectedLocation: selectedOption.value });
      };
    
      
      handleSubmit = () => {
        const { selectedGender, selectedLetter, selectedLocation } = this.state;

        //API CALL
        console.log('Selected gender:', selectedGender);
        console.log('Selected First Letter:', selectedLetter);
        console.log('Selected Location:', selectedLocation);

        // Add further logic for form submission
        const formData = {
          gender: selectedGender,
          letter: selectedLetter,
          location: selectedLocation,
        };
        


      };
    
      render() {
        return (
          <div className="App">
            <h1>Baby Namer 3000</h1>
            {/* <GenderDropdown onSelectGender={this.handleSelectGender} /> */}
            <GenderDropdown
              onChange={this.handleSelectGender}
            />
            {/* Add other dropdowns and form elements */}
            <LetterDropdown
              onChange={this.handleSelectLetter}
            />
            {/* Add other dropdowns and form elements */}
            <LocationDropdown
              onChange={this.handleSelectLocation}
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        );
      }
}
export default Homepage;