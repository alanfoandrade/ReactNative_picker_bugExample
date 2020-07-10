import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const ModalTagListContainer = styled.View`
  margin-top: 30px;
`;

export const ModalTagList = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 25 },
})`
  padding: 0 20px;
  padding-top: 20px;
`;

export const TagContainer = styled.View`
  position: relative;
  height: 60px;
  margin-right: 15px;
  justify-content: flex-end;
`;

export const RemoveTagButton = styled.TouchableHighlight`
  position: absolute;
  z-index: 1;
  right: -10px;
  top: 14px;
  width: 24px;
  height: 24px;
  background-color: ${colors.primary};
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  padding: 6px 12px;
  background: #eeeeee;
  border-radius: 8px;
`;

export const ModalTagItem = styled.Text`
  font-size: 14px;
  color: ${colors.black80};
`;
