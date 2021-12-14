import './Screen.css'

export default function Screen({prev_operrand, curr_operrand, operator, result}) {
  return(
    <div className="screen">
      {result ? (
        <p className='curr-operrand'>{result}</p>
      ) : (
        <>
        <p className='prev-operrand'>{prev_operrand} {operator}</p>
        <p className='curr-operrand'>{curr_operrand}</p>
        </>
      )}
    </div>
  )
}