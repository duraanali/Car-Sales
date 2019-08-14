import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carInfo.price + props.additionalPriceTotal}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carInfo: state.car,
    additionalPriceTotal: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  {}
)(Total);

