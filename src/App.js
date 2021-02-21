import React, { useState } from 'react';
import './App.css';


function App() {
  const [result, setResult] = useState(null);
  const [spinner, setSpinnet] = useState(false);
  
  const raffle = () => Math.random() + .5 >> 0; 
  
  const handleRaffle = () => {
    setSpinnet(true);
    setTimeout(() => {
      const resultRaffle = raffle();
      setResult(resultRaffle);
      setSpinnet(false);
    }, 500)
  };
    
  const renderResult = () => {
    if(result !== null) {
      return result ? <div className="True"><h1>Sim</h1></div> : <div className="False"><h1>Não</h1></div>
    }
    return null;
  };

  const renderSpinner = () => <div className="Spinner"><h4>Sorteando...</h4></div>

  return (
    <div className="App">
      <div className="Result">
        {spinner ? renderSpinner() : renderResult()}
      </div>
      <button className="Button" onClick={handleRaffle}>Sortear</button>
    </div>
  );
}

export default App;
