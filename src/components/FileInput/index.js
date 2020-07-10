import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, InputTitle } from './styles';

export default function FileInput({ title, style, ...rest }) {
  return (
    <Wrapper style={style} {...rest}>
      <InputTitle {...rest}>{title}</InputTitle>
    </Wrapper>
  );
}

FileInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string.isRequired,
};

FileInput.defaultProps = {
  style: {},
};
