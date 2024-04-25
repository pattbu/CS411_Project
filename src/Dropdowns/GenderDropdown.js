import React from 'react';
// import { Genders } from './menus/options.js'; // Import the 'Genders' variable from options.js
import './DropdownStyles.css'; // Import your CSS file

const GenderDropdown = () => {
        return (
            <div className="dropdown-container">
                <label className="dropdown-label">Select Gender</label>
                {/* <Select></Select> */}
                <select>
                    {Genders.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
        );
    };

export default GenderDropdown;

const Genders= [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'all', label: 'All' },
];