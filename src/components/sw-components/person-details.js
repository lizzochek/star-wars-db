import React from "react";

import ItemDetails from "../item-details/item-details";
import Record from "../record/record";
import swapiServiceContainer from "../hoc-helpers/swapi-service-container";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};

export default swapiServiceContainer(PersonDetails, mapMethodsToProps);
