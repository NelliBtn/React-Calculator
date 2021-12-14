import './App.css';
import Screen from './components/Screen';
import Buttons from './components/Buttons';

function App() {
  const curr_operrand = 0;
  const prev_operrand = 10;
  const operator = '+';

  return (
    <div className="App">
      <Screen prev_operrand={prev_operrand} curr_operrand={curr_operrand} operator={operator}/>
      <Buttons />
    </div>
  );
}

export default App;
