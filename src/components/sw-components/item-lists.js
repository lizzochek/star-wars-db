import React from "react";
import ItemList from "../item-list/item-list";
import dataContainer from "../hoc-helpers/data-container";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const PersonList = dataContainer(ItemList, getAllPeople);
const PlanetList = dataContainer(ItemList, getAllPlanets);
const StarshipList = dataContainer(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
