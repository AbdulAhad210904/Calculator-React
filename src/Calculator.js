import React, { useState } from 'react';
import './Calculator.css';

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

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <div>
                <button onClick={() => handleButtonClick('AC')}>AC</button>
                <button onClick={() => handleButtonClick('DEL')}>DEL</button>
                <button onClick={() => handleButtonClick('%')}>%</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('00')}>00</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button className="equal" onClick={() => handleButtonClick('=')}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
