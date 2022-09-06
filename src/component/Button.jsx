import React from "react";
import '../style/css/button.css';

function Button(props) {

  const buttonIsOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return(
    <div className={`button ${buttonIsOperator(props.children) ? 'button-operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;


