import React, {useState} from 'react'

const Button2 = () => {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMoins = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button type='button' onClick = {onClickPlus}>+</button>

      <p>{count}</p>

      <button type='button' onClick = {onClickMoins}>-</button>



    </div>
  )
}

export default Button2
