import React from "react";

import ItemDetails from "../item-details/item-details";
import Record from "../record/record";
import swapiServiceContainer from "../hoc-helpers/swapi-service-container";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
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

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default swapiServiceContainer(StarshipDetails, mapMethodsToProps);
