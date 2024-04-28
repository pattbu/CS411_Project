import React, { useState } from 'react';
import './DropdownStyles.css';

const GenderDropdown = ({ onSelectedGender }) => {
    const genders = ['Female', 'Male', 'Neutral'];
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (e) => {
        const gender = e.target.value;
        setSelectedGender(gender);
        onSelectedGender(gender); // Assuming onSelectedGender expects a string
    };

    return (
        <div className="dropdown-container">
            <label className="dropdown-label">Select Gender</label>
            <select value={selectedGender} onChange={handleGenderChange}>
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                    <option key={gender} value={gender}>
                        {gender}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GenderDropdown;