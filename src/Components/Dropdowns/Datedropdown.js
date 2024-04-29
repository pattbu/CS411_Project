import React, { useState, useEffect } from 'react';

const DateDropdown = ({ onSelectMonth, onSelectDay, onSelectYear }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [days, setDays] = useState([]);

    useEffect(() => {
        if (selectedMonth && selectedYear) {
            let daysInMonth = 31;
            if (selectedMonth === 2) {
                daysInMonth = new Date(selectedYear, 2, 0).getDate();
            } else if ([4, 6, 9, 11].includes(selectedMonth)) {
                daysInMonth = 30;
            }
            setDays(Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString().padStart(2, '0')));
        }
    }, [selectedMonth, selectedYear]);

    const handleMonthChange = (e) => {
        const month = parseInt(e.target.value);
        setSelectedMonth(month);
        onSelectMonth(month);
    };

    const handleYearChange = (e) => {
        const year = parseInt(e.target.value);
        setSelectedYear(year);
        onSelectYear(year);
    };

    return (
        <div className="date-dropdown-container">
            <label className="dropdown-label">Select Date</label>
            <select onChange={handleYearChange}>
                <option value="">Select Year</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            <select onChange={handleMonthChange}>
                <option value="">Select Month</option>
                {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                ))}
            </select>
            <select onChange={(e) => onSelectDay(e.target.value)}>
                <option value="">Select Day</option>
                {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>
        </div>
    );
};

export default DateDropdown;
