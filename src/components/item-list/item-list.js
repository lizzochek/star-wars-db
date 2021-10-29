import React from "react";
import ErrorBoundary from "../error-boundary/error-boundary";
import PropTypes from "prop-types";

import "./item-list.css";

class ItemList extends React.Component {
  static defaultProps = {
    onItemSelected: () => {},
  };

  static propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
  };

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

    return <ErrorBoundary>{items}</ErrorBoundary>;
  }
}

export default ItemList;
