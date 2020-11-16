import React from "react";
import PropTypes from "prop-types";

function Person(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <hr/>
    </React.Fragment>

  );
}
Person.propTypes = {
  name: PropTypes.string
};

export default Person;