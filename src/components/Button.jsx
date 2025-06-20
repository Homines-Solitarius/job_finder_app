
const Button = ({ text, color, textColor }) => {
  return (
      <button style={{background: color, color: textColor}}>{text}</button>
  )
}


Button.defaultProps = {
  text: "My Button",
  color: "white"
}
export default Button