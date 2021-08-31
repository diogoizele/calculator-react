import React from "react";
import "./Display.css";

const Display = (props) => {
  return <input className="display" maxLength="9" value={props.value} disabled/>;
};

export default Display;
