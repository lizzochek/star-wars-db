import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";

const swapiServiceContainer = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          return <Wrapped {...props} swapiService={swapiService} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default swapiServiceContainer;
