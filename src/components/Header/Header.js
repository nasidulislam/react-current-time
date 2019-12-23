import React from "react";
import "./Header.scss";

// other imports
import content from "./content";
import classList from "../../global/js/helpers/classList";

const Header = props => {
  return (
    <div className={classList(content.containerClass)}>
      <h1 className={classList(content.classList.main, props.mainTextCLass)}>
        {props.mainText}
      </h1>
      <span
        className={classList(content.classList.helper, props.helperTextClass)}
      >
        {props.helperText}
      </span>
    </div>
  );
};

export default Header;
