import React from "react";

import SwapiService from "../../services/swapi-service";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import Error from "../error/error";
import Row from "../row/row";

import "./app.css";
import ItemDetails from "../item-details/item-details";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.hasError) return <Error />;
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const { getPerson, getStarship, getPersonImage, getStarshipImage } =
      this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <div>
        {/* <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <PeoplePage /> */}
        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}
