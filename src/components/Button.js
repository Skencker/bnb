import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Compteur: {count}</p>
      <button type="button" onClick={handleClick}>
        {" "}
        Click me{" "}
      </button>
    </>
  );
};

export default Button;
