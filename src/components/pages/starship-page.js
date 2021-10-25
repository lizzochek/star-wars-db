import React from "react";

import Row from "../row/row";
import { StarshipList } from "../sw-components/item-lists";
import StarshipDetails from "../sw-components/starship-details";

export default class StarshipsPage extends React.Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
