import './Screen.css'

export default function Screen({prev_operrand, curr_operrand, operator}) {
  return(
    <div className="screen">
      <p className='prev-operrand'>{prev_operrand} {operator}</p>
      <p className='curr-operrand'>{curr_operrand}</p>
    </div>
  )
}