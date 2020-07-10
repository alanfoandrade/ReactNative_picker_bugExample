import React from 'react';
import { Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import strings from '../../assets/strings';
import api from '../../services/api';

import {
  ModalImagesListContainer,
  ModalImagesList,
  ImageContainer,
  RemoveImageButton,
  ModalImageItem,
} from './styles';

export default function ImagesModal({ images, setImages }) {
  function handleImageRemove(image) {
    function deleteImage() {
      if (image.asset_id) api.delete(`/files/${image.asset_id}`);

      setImages(images.filter((i) => i.secure_url !== image.secure_url));
    }

    Alert.alert(
      `${strings.alert_delete_title}`,
      `${strings.alert_delete_image_description}`,
      [
        {
          text: `${strings.alert_delete_cancel}`,
          onPress: () => {},
          style: 'cancel',
        },
        { text: `${strings.alert_delete_confirm}`, onPress: deleteImage },
      ],
      { cancelable: false }
    );
  }

  return (
    <ModalImagesListContainer style={{ marginBottom: 30 }}>
      <ModalImagesList horizontal>
        {images.map((image) => (
          <ImageContainer key={image.secure_url}>
            <RemoveImageButton
              onPress={() => {
                handleImageRemove(image);
              }}
            >
              <Text style={{ fontSize: 35, color: '#FFF', marginBottom: 5 }}>
                -
              </Text>
            </RemoveImageButton>
            <ModalImageItem
              source={{ uri: image.secure_url }}
              resizeMode="stretch"
            />
          </ImageContainer>
        ))}
      </ModalImagesList>
    </ModalImagesListContainer>
  );
}

ImagesModal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setImages: PropTypes.func.isRequired,
};
