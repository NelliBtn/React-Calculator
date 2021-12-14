import './Buttons.css';
import Button from './Button';

export default function Buttons() {

  const buttons = [
    ['AC', '.', '+'],
    [1, 2, 3, '-'],
    [4, 5, 6, '/'],
    [7, 8, 9, '*'],
    ['DEL', 0, '=']
  ];

  return(
    <div className="buttons">
      {buttons.flat().map((btn, i) => {
        return (
          <Button
            key={i}
            value={btn}
            className={btn === 'AC' || btn === 'DEL' ? 'long-btn' : ''}
            onClick={() => console.log(`${btn} clicked`)}
          />
        )
      })}
    </div>
  )
}