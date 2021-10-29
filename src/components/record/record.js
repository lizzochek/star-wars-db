import React from "react";
import PropTypes from "prop-types";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

Record.defaultTypes = {
  item: null,
};

Record.propTypes = {
  item: PropTypes.object,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default Record;
