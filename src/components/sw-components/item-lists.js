import React from "react";
import ItemList from "../item-list/item-list";
import dataContainer from "../hoc-helpers/data-container";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const parentFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const ListWithChildren = parentFunction(ItemList, renderName);

const PersonList = dataContainer(ListWithChildren, getAllPeople);
const PlanetList = dataContainer(ListWithChildren, getAllPlanets);
const StarshipList = dataContainer(ListWithChildren, getAllStarships);

export { PersonList, PlanetList, StarshipList };
