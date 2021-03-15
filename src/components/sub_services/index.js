import React from 'react';
import { HCBox } from '../common';
import { connect } from 'react-redux';

const onToggleBox = (index, onToggleIndex) => () => {
  onToggleIndex(index);
};

export const SubServices = props => {
  const { onToggleIndex, active_index } = props;
  return props.data.map((item, index) => ( // props.subServices.map
    <HCBox
      key={index}
      item={item}
      index={index}
      active_index={active_index}
      onToggleBox={onToggleBox(index, onToggleIndex)}
    />
  ));
};

const mapStateToProps = ({ sevicesData }) => ({
  // subServices: sevicesData.subServices,   // should be opened
});

export default connect(
  mapStateToProps,
  {},
)(SubServices);