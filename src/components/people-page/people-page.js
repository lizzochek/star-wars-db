import React from "react";

import SwapiService from "../../services/swapi-service";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";

import "./people-page.css";

export default class PeoplePage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ErrorBoundary>
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}
        >
          {
            //Render function (pattern)
            (item) => item.name
          }
        </ItemList>
      </ErrorBoundary>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />;
      </ErrorBoundary>
    );
  }
}
