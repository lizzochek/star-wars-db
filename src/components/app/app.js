import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SwapiService from "../../services/swapi-service";
import TestSwapiService from "../../services/test-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundary from "../error-boundary/error-boundary";

import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starship-page";

import "./app.css";

export default class App extends React.Component {
  state = {
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
    return (
      <div>
        <ErrorBoundary>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Router>
              <div className="stardb-app">
                <Header onServiceChange={this.onServiceChange} />
                <ErrorBoundary>
                  <RandomPlanet />
                </ErrorBoundary>

                <ErrorBoundary>
                  <Routes>
                    <Route path="/people" element={<PeoplePage />}></Route>
                    <Route path="/planets" element={<PlanetsPage />}></Route>
                    <Route
                      path="/starships"
                      element={<StarshipsPage />}
                    ></Route>
                  </Routes>
                </ErrorBoundary>
              </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
}
