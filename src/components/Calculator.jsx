import React, { useState } from "react";
import "./Calculator.css";

import Button from "./Button.jsx";
import Display from "./Display.jsx";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const Calculator = (props) => {
  const [state, setState] = useState(initialState);

  const clearMemory = () => {
    setState(initialState);
  };

  const oppositeSign = () => {
    const i = state.current;
    const newValue = parseFloat(-state.displayValue);
    const values = [...state.values];
    values[i] = newValue;

    setState({ ...state, displayValue: newValue, values });
  };

  const percent = () => {
    const i = state.current;
    const newValue = parseFloat(state.displayValue / 100);
    const values = [...state.values];
    values[i] = newValue;

    setState({ ...state, displayValue: newValue, values });
  };

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState({ ...state, current: 1, clearDisplay: true, operation });
    } else {
      const equals = operation === "=";
      const currentOperation = state.operation;

      const values = [...state.values];

      if (currentOperation === "+") {
        values[0] = values[0] + values[1];
        values[1] = 0;
      } else if (currentOperation === "-") {
        values[0] = values[0] - values[1];
        values[1] = 0;
      } else if (currentOperation === "*") {
        values[0] = values[0] * values[1];
        values[1] = 0;
      } else if (currentOperation === "/") {
        values[0] = values[0] / values[1];
        values[1] = 0;
      }

      setState({
        ...state,
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  };

  const addDigit = (digit) => {
    if (digit === "," && state.displayValue.includes(",")) {
      return;
    }
    // se o display inicial for 0 ele vai apagar o valor do display para substituir posteriormente
    // ou se o clearDisplay estiver true: (display precisando ser limpo)
    const clearDisplay = state.displayValue === "0" || state.clearDisplay;

    // se o clearDisplay for true ou === 0, ele vai limpar o display, se não vai continuar com o estado
    const currentValue = clearDisplay ? "" : state.displayValue;

    // vai somar a string atual que pode ser vazia ou com um display, com o digito digitado
    const displayValue = currentValue + digit;

    // muda o valor do display no estado e seta o clearDisplay pra falso (não precisa limpar o display)
    setState({ ...state, displayValue, clearDisplay: false });

    if (digit !== ",") {
      const i = state.current;
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[i] = newValue;
      setState({ ...state, displayValue, clearDisplay: false, values });
    }
  };

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <Button label="AC" click={clearMemory} />
      <Button label="+/-" click={oppositeSign} />
      <Button label="%" click={percent} />
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
      <Button label="," click={addDigit} />
      <Button operation label="=" click={setOperation} />
    </div>
  );
};

export default Calculator;
