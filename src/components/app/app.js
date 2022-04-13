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
import SecretPage from "../pages/secret-page";
import LoginPage from "../pages/login-page";

import "./app.css";

export default class App extends React.Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
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
    const { isLoggedIn } = this.state;
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
                    <Route
                      path="/"
                      element={<h2>Welcome to Star DB</h2>}
                      exact
                    ></Route>
                    <Route path="/people" element={<PeoplePage />}></Route>
                    <Route path="/planets" element={<PlanetsPage />}></Route>
                    <Route
                      path="/starships"
                      element={<StarshipsPage />}
                      exact
                    ></Route>
                    <Route
                      path="/login"
                      element={
                        <LoginPage
                          isLoggedIn={isLoggedIn}
                          onLogin={this.onLogin}
                        />
                      }
                    ></Route>
                    <Route
                      path="/secret"
                      element={<SecretPage isLoggedIn={isLoggedIn} />}
                    ></Route>

                    <Route path="*" element={<h2>Page not found</h2>} />
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
