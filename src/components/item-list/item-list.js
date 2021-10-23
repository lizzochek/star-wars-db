import React from "react";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

import "./item-list.css";

export default class ItemList extends React.Component {
  state = {
    itemList: null,
    error: false,
    loading: true,
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then((itemList) => {
      this.setState({ itemList, loading: false });
    });
  }

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
    const { itemList, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorIndicator = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const people = hasData ? this.renderItems(itemList) : null;

    return (
      <React.Fragment>
        {errorIndicator}
        {spinner}
        {people}
      </React.Fragment>
    );
  }
}
