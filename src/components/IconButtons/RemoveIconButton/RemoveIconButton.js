import React from "react";
import Fab from "@material-ui/core/Fab";
import RemoveIcon from "@material-ui/icons/Remove";
import "../IconButtons.scss";

// other imports
import content from "./content";
import classList from "../../../global/js/helpers/classList";

const RemoveIconButton = props => {
  return (
    <div
      className={classList(content.containerClass, props.containerClass)}
      onClick={props.onClickHandler}
    >
      <Fab
        color={props.color}
        aria-label={props.label}
      >
        <RemoveIcon />
      </Fab>
    </div>
  );
};

export default RemoveIconButton;
