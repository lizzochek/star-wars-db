import React from "react";
import ItemList from "../item-list/item-list";
import dataContainer from "../hoc-helpers/data-container";
import swapiServiceContainer from "../hoc-helpers/swapi-service-container";

const parentFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const ListWithChildren = parentFunction(ItemList, renderName);

const PersonList = swapiServiceContainer(
  dataContainer(ListWithChildren),
  mapPersonMethodsToProps
);

const PlanetList = swapiServiceContainer(
  dataContainer(ListWithChildren),
  mapPlanetMethodsToProps
);

const StarshipList = swapiServiceContainer(
  dataContainer(ListWithChildren),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
