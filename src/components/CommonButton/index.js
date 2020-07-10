import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { CommonButtonContainer } from './styles';

export default function CommonButton({ name, size, color, onPress, ...rest }) {
  return (
    <CommonButtonContainer onPress={onPress} {...rest}>
      <Icon name={name} size={size} color={color} />
    </CommonButtonContainer>
  );
}

CommonButton.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

CommonButton.defaultProps = {
  name: 'add',
  size: 28,
  color: '#fff',
};
