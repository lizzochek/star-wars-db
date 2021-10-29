import React from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorBoundary from "../error-boundary/error-boundary";
import PropTypes from "prop-types";
export default class ItemDetails extends React.Component {
  static propTypes = {
    itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    getData: PropTypes.func.isRequired,
    getImageUrl: PropTypes.func.isRequired,
  };

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
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
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
    const { itemId, getData } = this.props;

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
