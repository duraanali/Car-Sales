import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// actions
import { addCarFeature } from "./actions";

// connect comp to store
import { connect } from "react-redux";

const App = props => {
  // const removeFeature = item => {
  //   props.deleteFeature(item);
  // };

  const buyItem = item => {
    props.addCarFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionPrice
  };
};

export default connect(
  mapStateToProps,
  { addCarFeature }
)(App);