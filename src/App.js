import './App.css';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import { useState } from 'react';

function App() {
  const [prev_operrand, setPrevOperrand] = useState('');
  const [curr_operrand, setCurrOperrand] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  return (
    <div className="App">
      <Screen prev_operrand={prev_operrand} curr_operrand={curr_operrand} operator={operator} result={result}/>
      <Buttons 
        prev_operrand={prev_operrand} 
        setPrevOperrand={setPrevOperrand} 
        curr_operrand={curr_operrand} 
        setCurrOperrand={setCurrOperrand} 
        operator={operator}
        setOperator={setOperator}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
