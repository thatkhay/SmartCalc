import React, { useState } from 'react';
import Smallbutton from '../Component/Smallbutton';
import * as Math from 'mathjs'

function Mypage() {
  const buttonValues = ['AC', '/', '*', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'AC') {
      setInputValue('');
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };

  const calculateResult = () => {
    try {
      const result = Math.evaluate(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  const handleDeleteClick = () => {
    setInputValue((prevValue)=> prevValue.slice(0, -1));
  };

  return (
    <div className='main'>
      <div className='mainCalcDiv'>
        <div className='inputDiv'>
          <input type='text' className='input' value={inputValue} readOnly />
        </div>
        <div className='buttonDiv'>
          {buttonValues.map((value) => (
            <Smallbutton key={value} value={value} onClick={handleButtonClick} />
          ))}
          <Smallbutton value='=' onClick={calculateResult} />
        </div>
        <button className='del' onClick={handleDeleteClick}>Del</button>
      </div>
    </div>
  );
}

export default Mypage;
