import React from "react";
import "./Button.css";

const Button = (props) => {
  const applyClasses = () => {
    let classes = "button ";
    classes += props.operation ? "operation" : "";
    classes += props.double ? "double" : "";
    return classes;
  };

  return (
    <button
      onClick={(e) => props.click && props.click(props.label)}
      className={applyClasses()}
    >
      {props.label}
    </button>
  );
};

export default Button;
