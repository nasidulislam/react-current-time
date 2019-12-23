import React from "react";
import "./Home.scss";

// component imports
import Header from "../../components/Header/Header";
import AddCity from "../../components/AddCity/AddCity";
import Button from "../../components/Button/Button";
import Display from "../../components/Display/Display";

// other imports
import content from "./content";
import classList from "../../global/js/helpers/classList";

class Home extends React.Component {
  render() {
    const currentCity = this.props.currentCity;

    return (
      <div className={classList(content.containerClass)}>
        <Header
          mainText={content.text.header.main}
          helperText={content.text.header.helper}
        />

        <div className={content.classList.inputs.containerClass}>
          <AddCity
            containerClass={content.classList.addCity.containerClass}
            lookupCity={this.props.lookupCity}
            currentCity={currentCity}
            hasNoLocation={this.props.hasNoLocation}
          />

          <Button
            buttonText={content.text.getTimeButton.main}
            containerClass={content.classList.getTimeButton.containerClass}
            onClickHandler={this.props.getTime}
          />
        </div>

        <Display
          currentTime={currentCity.currentTime}
          addToFavorites={this.props.addToFavorites}
        />
      </div>
    );
  }
}

export default Home;
