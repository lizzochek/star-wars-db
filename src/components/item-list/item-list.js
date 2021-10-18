import React from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

import "./item-list.css";

export default class ItemList extends React.Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
    error: false,
    loading: true,
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList, loading: false });
    });
  }

  renderItems = (arr) => {
    const items = arr.map(({ id, name }) => {
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

    return <ul className="item-list list-group">{items}</ul>;
  };

  render() {
    const { peopleList, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorIndicator = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const people = hasData ? this.renderItems(peopleList) : null;

    return (
      <React.Fragment>
        {errorIndicator}
        {spinner}
        {people}
      </React.Fragment>
    );
  }
}
