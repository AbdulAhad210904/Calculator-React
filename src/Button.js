import React from 'react';
import './Calculator.css';

const Button = ({ onClick, value }) => {
    return (
        <button onClick={() => onClick(value)}>{value}</button>
    );
};

export default Button;
