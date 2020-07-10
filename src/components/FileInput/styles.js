import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: flex-start;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.color};

  flex-direction: row;
`;
export const InputTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.color};
`;
