import React from "react";

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import ErrorBoundary from "../error-boundary/error-boundary";

import {
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components/item-lists";

import PersonDetails from "../sw-components/person-details";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";

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

    return (
      <div>
        <ErrorBoundary>
          <SwapiServiceProvider value={this.swapiService}>
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

            <ErrorBoundary>
              <PersonDetails itemId={11} />
              <PlanetDetails itemId={6} />
              <StarshipDetails itemId={9} />
              <PersonList />
              <StarshipList />
              <PlanetList />
            </ErrorBoundary>
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
}
