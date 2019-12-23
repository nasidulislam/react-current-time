import React from "react";
import "./AddCity.scss";

// component imports
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// other imports
import Script from "react-load-script";
import content from "./content";
import classList from "../../global/js/helpers/classList";

class AddCity extends React.Component {
  state = {
    value: ""
  };

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    var options = { types: ["(cities)"] };
    // Initialize Google Autocomplete
    /*global google*/
    // To disable any eslint 'google not defined' errors
    window.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Fire Event when a suggested name is selected
    window.autocomplete.addListener("place_changed", this.props.lookupCity);
  };

  handleSearch = value => {
    console.log(value);
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <div
        className={classList(content.containerClass, this.props.containerClass)}
      >
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBB3r62SVFhhMiBAE1OsmhNJkipwe445rQ&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <MuiThemeProvider>
          <SearchBar
            id="autocomplete"
            className="add-city-search-bar"
            placeholder=""
            hintText={content.searchBarHintText}
            value={this.props.currentCity.name}
            onRequestSearch={this.handleSearch}
            onChange={this.handleChange}
          />
        </MuiThemeProvider>

        <div
          className={classList(
            content.classList.errorContainerClass,
            this.props.errorContainerClass
          )}
          data-invalid={this.props.hasNoLocation}
        >
          {content.text.errorText}
        </div>
      </div>
    );
  }
}

export default AddCity;
