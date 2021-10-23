import React from "react";
import ErrorBoundary from "../error-boundary/error-boundary";

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <ErrorBoundary>
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
      </ErrorBoundary>
    </div>
  );
};

export default Row;
