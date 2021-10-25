import React from "react";

import SwapiService from "../../services/swapi-service";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import ErrorBoundary from "../error-boundary/error-boundary";
import Record from "../record/record";
import ItemDetails from "../item-details/item-details";

import {
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components/item-lists";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components/details";

import "./app.css";
export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getPlanet,
      getPlanetImage,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="eyeColor" label="Eye color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="manufacturer" label="Manufacturer" />
        <Record field="costInCredits" label="Cost" />
        <Record field="length" label="Length" />
        <Record field="crew" label="Crew" />
        <Record field="passengers" label="Passengers" />
        <Record field="cargoCapacity" label="Capacity" />
      </ItemDetails>
    );

    const planetDetails = (
      <ItemDetails itemId={4} getData={getPlanet} getImageUrl={getPlanetImage}>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
      </ItemDetails>
    );

    return (
      <div>
        <ErrorBoundary>
          <Header />
          <ErrorBoundary>
            {planet}

            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
          </ErrorBoundary>

          <PersonDetails itemId={11}></PersonDetails>

          <ErrorBoundary>
            <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
            <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
            <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
          </ErrorBoundary>
        </ErrorBoundary>
      </div>
    );
  }
}
