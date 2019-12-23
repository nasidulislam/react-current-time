import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./IconButtons.scss";

// other imports
import content from "./content";
import classList from "../../global/js/helpers/classList";

const AddIconButton = props => {
  return (
    <div
      className={classList(content.containerClass, props.containerClass)}
      onClick={props.onClickHandler}
    >
      <Fab
        color={props.color}
        aria-label={props.label}
        className={"icon-button " + props.buttonClass}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddIconButton;
