import React from 'react';
import { connect } from 'react-redux';
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.nameOfCar}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    nameOfCar: state.name,
  };
};

export default connect(
  mapStateToProps,
  {}
)(AddedFeature);
