import React from "react";

import ItemDetails from "../item-details/item-details";
import Record from "../record/record";
import swapiServiceContainer from "../hoc-helpers/swapi-service-container";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
};

export default swapiServiceContainer(PlanetDetails, mapMethodsToProps);
