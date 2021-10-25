import React from "react";

import SwapiService from "../../services/swapi-service";
import TestSwapiService from "../../services/test-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";

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
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? TestSwapiService : SwapiService;

      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div>
        <ErrorBoundary>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Header onServiceChange={this.onServiceChange} />
            <ErrorBoundary>{planet}</ErrorBoundary>

            <ErrorBoundary>
              <Row
                left={<PersonList />}
                right={<PersonDetails itemId={11} />}
              />
              <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />
              <Row
                left={<StarshipList />}
                right={<StarshipDetails itemId={9} />}
              />
            </ErrorBoundary>
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
}
