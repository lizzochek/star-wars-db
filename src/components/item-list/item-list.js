import React from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import "./item-list.css";

export default class ItemList extends React.Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    //Add error handling
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  renderItems = (arr) => {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const people = this.renderItems(peopleList);

    return <ul className="item-list list-group">{people}</ul>;
  }
}
