import './App.css';
import Button from './components/Button';
import Counter from './components/clickcounter';
import freeCodeCamplogo from './images/FreeCodeCamp_logo.svg.png';
import { useState } from 'react';

function App() {

  const [numclick, setnumclick] = useState (0);

  const pressClick = () => {
    setnumclick(numclick + 1); 
  }

  const restartClick = () => {
    setnumclick(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCamplogo}
          alt='Logo of freecodecamp'/>
      </div>
      <div className='main-container'>
        <Counter  numclick={numclick} />
        <Button
          texto='Click'
          isclickbutton={true}
          pressClick={pressClick}/>
        <Button
          texto='restart'
          isclickbutton={false}
          pressClick={restartClick} />
      </div>
    </div>
  );
}

export default App;
