import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const ModalImagesListContainer = styled.View``;

export const ModalImagesList = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 25 },
})`
  padding: 0 20px;
  padding-top: 20px;
`;

export const ImageContainer = styled.View``;

export const RemoveImageButton = styled.TouchableHighlight`
  z-index: 1;
  position: absolute;
  right: 5px;
  width: 24px;
  height: 24px;
  background-color: ${colors.primary};
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ModalImageItem = styled.Image`
  height: 100px;
  width: 100px;
  margin-right: 15px;
  margin-top: 10px;
`;
