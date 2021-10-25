import React from "react";

import ItemDetails from "../item-details/item-details";
import Record from "../record/record";
import swapiServiceContainer from "../hoc-helpers/swapi-service-container";

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;

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

export default swapiServiceContainer(StarshipDetails);
