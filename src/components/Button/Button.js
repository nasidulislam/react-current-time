import React from "react";
import "./Button.scss";

// other imports
import content from "./content";
import classList from "../../global/js/helpers/classList";

const Button = props => {
  return (
    <div className={classList(content.containerClass, props.containerClass)}>
      <button
        className={classList(content.classList.buttonClass, props.buttonClass)}
        onClick={props.onClickHandler}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;
