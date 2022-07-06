import React from 'react';
import '../components/Button.css';

function Button ({ texto, isclickbutton, pressClick }) {
    return (
       <button className={isclickbutton ? 'clickbutton' : 'restartbutton'}
       onClick={pressClick}>
        {texto}
       </button> 
    );
}

export default Button;