import React, { useState } from 'react';
import './App.css';
import Display from './component/Display';
import Buttons from './component/Button';
import Result from './component/Result';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');  // Clear both expression and result
    } else if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString()); // Set result in a separate box
      } catch (error) {
        setResult('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div id="calculator">
      <h1>React Calculator</h1>
      <Display value={expression} />
      <Result value={result} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
