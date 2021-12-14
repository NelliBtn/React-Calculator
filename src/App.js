import './App.css';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import Button from './components/Button';

function App() {
  const curr_operrand = 0;
  const prev_operrand = 10;
  const operator = '+';

  const buttons = [
    ['AC', '.', '+'],
    [1, 2, 3, '-'],
    [4, 5, 6, '/'],
    [7, 8, 9, '*'],
    ['DEL', 0, '=']
  ];

  return (
    <div className="App">
      <Screen prev_operrand={prev_operrand} curr_operrand={curr_operrand} operator={operator}/>
      <Buttons>
        <Button />
      </Buttons>
    </div>
  );
}

export default App;
