import React from "react";

import ItemDetails from "../item-details/item-details";
import Record from "../record/record";
import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";

const PersonDetails = ({ itemId }) => {
  //SwapiServiceConsumer takes a function which takes swapiService
  return (
    <SwapiServiceConsumer>
      {({ getPerson, getPersonImage }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet, getPlanetImage }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {(getStarship, getStarshipImage) => {
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
      }}
    </SwapiServiceConsumer>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
