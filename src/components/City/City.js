import React from "react";
import "./City.scss";

// other imports
import content from "./content";
import classList from "../../global/js/helpers/classList";

const City = props => {
  return (
    <div className={classList(content.containerClass, props.containerClass)}>
      <span>{props.city.name}</span>
      <span>{props.city.currentTime}</span>
    </div>
  );
};

export default City;
