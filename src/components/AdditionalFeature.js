import React from 'react';
import { connect } from 'react-redux';
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.storeInfo.name} (+{props.storeInfo.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    featuredCars: state.features,
    storeInfo: state.store
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeature);
