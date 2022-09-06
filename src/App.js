import './style/css/reset.css';
import './style/css/App.css';
import fCCLogo from './img/logo/FreeCodeCamp_logo.svg';
import Button from './component/Button';
import Display from './component/Display';
import ButtonClear from './component/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const setClear = value => {
    setInput('');
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Ingrese un valor para calcular.');
    }
  };

  return (
    <div className='App'>
      <div className='logo-and-Calculator-container'>
        <img
          className='fcc-logo' 
          alt='Logo FreeCodeCamp' 
          src={fCCLogo} />
        <div className='calculator-container'>
          <Display input={input} />
          <div className='row'>
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
            <Button handleClick={addInput}>3</Button>
            <Button handleClick={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>4</Button>
            <Button handleClick={addInput}>5</Button>
            <Button handleClick={addInput}>6</Button>
            <Button handleClick={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>7</Button>
            <Button handleClick={addInput}>8</Button>
            <Button handleClick={addInput}>9</Button>
            <Button handleClick={addInput}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={calculateResult}>=</Button>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>.</Button>
            <Button handleClick={addInput}>/</Button>
          </div>
          <div className='row'>
            <ButtonClear handleClear={setClear} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;