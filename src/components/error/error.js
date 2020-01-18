import React from 'react';
import img from './error.jpg';

import './error.css';

const Error = () => {
    return (
        <div className='error'>
            <span>Error</span>
            <img src={img} alt='error'></img>
        </div>
    )
}

export default Error;