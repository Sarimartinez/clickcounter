import React from 'react';
import '../components/Counter.css';

function Counter ({ numclick }) {
    return (
        <div className='counter'>
            {numclick}
        </div>
    );
}

export default Counter;