import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carInfo.image} alt={props.carInfo.name} />
      </figure>
      <h2>{props.carInfo.name}</h2>
      <p>Amount: ${props.carInfo.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    carInfo: state.car
  };
};

export default connect(
  mapStateToProps,
  {}
)(Header);
