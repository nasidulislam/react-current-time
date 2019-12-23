import React from "react";
import "./Favorites.scss";

// component imports
import Header from "../../components/Header/Header";
import City from "../../components/City/City";

// other imports
import content from "./content";
import classList from "../../global/js/helpers/classList";

class Favorites extends React.Component {
  render() {
    return (
      <div className={classList(content.containerClass)}>
        <Header
          mainText={content.text.header.main}
          helperText={content.text.header.helper}
        />

        {this.props.favoriteCities.map((city, idx) => (
          <City key={idx} index={idx} city={city} />
        ))}
      </div>
    );
  }
}

export default Favorites;
