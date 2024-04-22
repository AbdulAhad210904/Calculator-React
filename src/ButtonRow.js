import React from 'react';
import Button from './Button';

const ButtonRow = ({ buttons, onClick }) => {
    return (
        <div>
            {buttons.map(button => (
                <Button key={button} onClick={onClick} value={button} />
            ))}
        </div>
    );
};

export default ButtonRow;
