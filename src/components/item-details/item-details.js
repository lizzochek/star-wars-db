import React from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-service";
import ItemView from "./item-view";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

export default class ItemDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onItemLoaded = (item) => {
    this.setState({
      item,
      loading: false,
      image: this.props.getImageUrl(item),
    });
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then(this.onItemLoaded).catch(this.onError);
  }

  render() {
    if (!this.state.item) {
      return <span>Select a person from the list</span>;
    }

    const { item, error, loading, image } = this.state;

    const hasData = !(loading || error);

    const errorIndicator = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <ItemView item={item} image={image} /> : null;

    return (
      <div className="person-details card">
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}
