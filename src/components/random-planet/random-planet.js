import React, { Component } from "react";
import PropTypes from "prop-types";

import SwapiService from "../../services/swapi-service";
import "./random-planet.css";
import PlanetDetails from "../sw-components/planet-details";
export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 5000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  //Lifecycle hooks
  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  };

  render() {
    const { planet } = this.state;

    return <PlanetDetails itemId={planet.id} />;
  }
}
