import React from "react";
import "./Calculator.css";

import Button from "./Button.jsx";
import Display from "./Display.jsx";

const Calculator = (props) => {
  const clearMemory = () => {
    console.log("limpar");
  };

  const setOperation = (operation) => {
    console.log(operation);
  };
  const addDigit = (digit) => {
    console.log(digit);
  };
  return (
    <div className="calculator">
      <Display value="100" />
      <Button label="AC" click={clearMemory} />
      <Button label="+/-" />
      <Button label="%" />
      <Button operation label="÷" click={() => setOperation("/")} />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button operation label="×" click={() => setOperation("*")} />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button operation label="-" click={setOperation} />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button operation label="+" click={setOperation} />
      <Button double label="0" click={addDigit} />
      <Button label="," />
      <Button operation label="=" click={setOperation} />
    </div>
  );
};

export default Calculator;
