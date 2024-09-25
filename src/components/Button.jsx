const Button = ({text, onClickFunc, id="button"}) => {
  return (
    <button id={id} onClick={onClickFunc}>
        {text}
    </button>
  )
}

export default Button
