import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
const AdditionalFeatures = props => {


  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.storeInfo.length ? (
        <ol type="1">
          {props.storeInfo.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    storeInfo: state.store
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);
