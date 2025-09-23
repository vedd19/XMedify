import React from 'react';
import './Button.css'

function Button({ children, onClick, type, id }) {
    return <button className='button' onClick={onClick} type={type} id={id}>{children}</button>;
}

export default Button;