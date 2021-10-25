import React from "react";

import ItemDetails from "../item-details/item-details";
import Record from "../record/record";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPlanetImage,
  getPersonImage,
  getStarshipImage,
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
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
};

export { PersonDetails, PlanetDetails, StarshipDetails };
