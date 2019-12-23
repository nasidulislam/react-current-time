import React from "react";
import "./Display.scss";

// component imports
import AddIconButton from "../IconButtons/AddIconButton";

// other imports
import content from "./content";
import classList from "../../global/js/helpers/classList";

const Display = props => {
  return (
    <div className={classList(content.containerClass, props.containerClass)}>
      <span>{props.currentTime}</span>
      {props.currentTime ? (
        <AddIconButton onClickHandler={props.addToFavorites} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Display;
