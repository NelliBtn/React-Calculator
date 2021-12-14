import './Button.css'

export default function Button({value, className, handleClick}) {
  return(
    <button className={className} value={value} onClick={(e) => handleClick(e)}>{value}</button>
  )
}