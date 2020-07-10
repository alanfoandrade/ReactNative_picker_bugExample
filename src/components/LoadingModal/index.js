import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

const LoadingModal = ({ loading }) => {
  return (
    <Modal transparent animationType="none" visible={loading}>
      <Container>
        <Content>
          <ActivityIndicator animating={loading} size={30} />
        </Content>
      </Container>
    </Modal>
  );
};

export default LoadingModal;

LoadingModal.propTypes = {
  loading: PropTypes.bool.isRequired,
};
