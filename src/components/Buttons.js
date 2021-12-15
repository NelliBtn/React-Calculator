import './Buttons.css';
import Button from './Button';

export default function Buttons({ setCurrOperrand, curr_operrand, operator, setOperator, prev_operrand, setPrevOperrand, setResult}) {

  const buttons = [
    ['AC', '.', '+'],
    [1, 2, 3, '-'],
    [4, 5, 6, '/'],
    [7, 8, 9, '*'],
    ['DEL', 0, '=']
  ];

  // EDGE CASES TO CONSIDER
  // no more than 1 zero before the dot . (ends up in error)
  // no more than 12 chars OR text-wrap
  // if starts with dot . auto add 0 in front


  const handleClick = (e) => {
    e.preventDefault();
    const click = e.target.value;
    switch(click) {
      case 'AC':
        setCurrOperrand('');
        setOperator('');
        setPrevOperrand('');
        setResult('');
        break;
      case 'DEL':
        setCurrOperrand(curr_operrand.slice(0, -1));
        break;
      case '+':
      case '-':
      case '/':
      case '*':
        setPrevOperrand(curr_operrand);
        setOperator(click);
        setCurrOperrand('');
        break;
      case '=':
        const result = eval(prev_operrand + operator + curr_operrand);
        setResult(result);
        setCurrOperrand('');
        setOperator('');
        setPrevOperrand('');
      default:
        setCurrOperrand(curr_operrand += click);
    }
  }

  return(
    <div className="buttons">
      {buttons.flat().map((btn, i) => {
        return (
          <Button
            key={i}
            value={btn}
            className={btn === 'AC' || btn === 'DEL' ? 'long-btn' : ''}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}