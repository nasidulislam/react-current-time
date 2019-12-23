import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages import
import Home from "../../pages/Home/Home";
import Favorites from "../../pages/Favorites/Favorites";

// other imports
import content from "./content";
import classList from "../../global/js/helpers/classList";
import "../../global/styles/reset.scss";
import timezone from "../../global/js/services/timezone";

class App extends React.Component {
  state = {
    favorites: [],
    currentCity: "",
    hasNoLocation: ""
  };

  lookupCity = () => {
    let addressObject = window.autocomplete.getPlace();
    let address = addressObject.address_components;
    let currentCity;

    if (address) {
      currentCity = {
        name: addressObject.formatted_address,
        lat: addressObject.geometry.location.lat(),
        long: addressObject.geometry.location.lng()
      };

      this.setState({ currentCity });
    }
  };

  getTime = () => {
    if (this.state.currentCity === "") {
      // no location has been selected, handle validation
      this.setState({ hasNoLocation: true });
    } else {
      // location selected, proceed to call API
      const currentCity = this.state.currentCity;
      timezone.get(currentCity.lat, currentCity.long).then(response => {
        const apiResponse = response[0];
        const timestamp = response[1];
        const offsets =
          apiResponse.dstOffset * 1000 + apiResponse.rawOffset * 1000;
        const localDate = new Date(timestamp * 1000 + offsets);
        const currentTime = localDate.toLocaleString();

        currentCity.currentTime = currentTime;

        this.setState({ hasNoLocation: false, currentCity });
      });
    }
  };

  addToFavorites = () => {
    const currentCity = this.state.currentCity;
    const favorites = this.state.favorites;

    favorites.push(currentCity);
    this.setState({ favorites });
  };

  render() {
    return (
      <div className={classList(content.containerClass)}>
        <Router>
          <div>
            <ul className={classList(content.classList.nav.containerClass)}>
              <li className={classList(content.classList.nav.itemClass)}>
                <Link to="/">Home</Link>
              </li>

              <li className={classList(content.classList.nav.itemClass)}>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>

            <div className={classList(content.classList.pages.containerClass)}>
              <Switch>
                <Route path="/favorites">
                  <Favorites favoriteCities={this.state.favorites} />
                </Route>
                <Route path="/">
                  <Home
                    lookupCity={this.lookupCity}
                    currentCity={this.state.currentCity}
                    getTime={this.getTime}
                    hasNoLocation={this.state.hasNoLocation}
                    addToFavorites={this.addToFavorites}
                  />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
