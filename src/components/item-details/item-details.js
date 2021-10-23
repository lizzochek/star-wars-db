import React from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorBoundary from "../error-boundary/error-boundary";

export default class ItemDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: true,
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

    const { item, loading, image } = this.state;
    const { name } = item;

    if (loading) return <Spinner />;

    return (
      <ErrorBoundary>
        <div className="item-details card">
          <img className="item-image" src={image} alt="item" />

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })}
            </ul>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
