import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log('car info:', props.carInfo)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.carInfo.length ? (
        <ol type="1">
          {props.carInfo.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
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
)(AddedFeatures);
