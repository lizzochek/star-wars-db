import React from "react";
import ErrorBoundary from "../error-boundary/error-boundary";

import Spinner from "../spinner/spinner";

const dataContainer = (View) => {
  return class extends React.Component {
    state = {
      data: null,
    };

    componentDidMount() {
      this.props.getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) return <Spinner />;
      return (
        <ErrorBoundary>
          <View {...this.props} data={data} />
        </ErrorBoundary>
      );
    }
  };
};

export default dataContainer;
