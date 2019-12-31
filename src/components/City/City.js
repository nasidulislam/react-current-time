import React from "react";
import "./City.scss";

// other imports
import content from "./content";
import classList from "../../global/js/helpers/classList";

// component imports
import RemoveIconButton from '../../components/IconButtons/RemoveIconButton/RemoveIconButton'

const City = props => {
  return (
    <div className={classList(content.containerClass, props.containerClass)}>
      <div className={content.classList.infoDisplay}>
        <span>{props.city.name}</span>
        <span>{props.city.currentTime}</span>
      </div>
      <div className={content.classList.removeButton}>
        <RemoveIconButton index={props.index} onClickHandler={props.cityRemoveHandler} />
      </div>
    </div>
  );
};

export default City;
