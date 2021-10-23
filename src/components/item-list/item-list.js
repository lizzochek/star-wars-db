import React from "react";
import SwapiService from "../../services/swapi-service";
import dataContainer from "../hoc-helpers/data-container";

import "./item-list.css";

class ItemList extends React.Component {
  renderItems = (arr) => {
    const items = arr.map((item) => {
      const { id } = item;

      //Children - function in the body of the ItemList
      const label = this.props.children(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });

    return <ul className="item-list list-group">{items}</ul>;
  };

  render() {
    const { data } = this.props;
    const items = this.renderItems(data);

    return <React.Fragment>{items}</React.Fragment>;
  }
}

const { getAllPeople } = new SwapiService();

export default dataContainer(ItemList, getAllPeople);
