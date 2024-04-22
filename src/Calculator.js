import React, { useState } from 'react';
import './Calculator.css';
import ButtonRow from './ButtonRow';

const Calculator = () => {
    const [input, setInput] = useState(''); // State to hold the input value

    const handleButtonClick = (buttonValue) => {
        if (buttonValue === '=') {
            setInput(eval(input).toString());
        } else if (buttonValue === 'AC') {
            setInput('');
        } else if (buttonValue === 'DEL') {
            setInput(input.slice(0, -1));
        } else {
            setInput(input + buttonValue);
        }
    };

    const rows = [
        ['AC', 'DEL', '%', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['00', '0', '.', '=']
    ];

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            {rows.map((row, index) => (
                <ButtonRow key={index} buttons={row} onClick={handleButtonClick} />
            ))}
        </div>
    );
};

export default Calculator;
