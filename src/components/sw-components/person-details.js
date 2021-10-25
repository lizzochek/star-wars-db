import React from "react";

import ItemDetails from "../item-details/item-details";
import Record from "../record/record";
import swapiServiceContainer from "../hoc-helpers/swapi-service-container";

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;

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

export default swapiServiceContainer(PersonDetails);
