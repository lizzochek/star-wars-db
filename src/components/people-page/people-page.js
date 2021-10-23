import React from "react";

import SwapiService from "../../services/swapi-service";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import Error from "../error/error";
import Row from "../row/row";

import "./people-page.css";

export default class PeoplePage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <Error />;

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        //Render function (pattern)
        renderItem={(item) => item.name}
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
