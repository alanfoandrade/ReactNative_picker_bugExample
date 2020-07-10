import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: flex-start;
`;

export const InputTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.color};
`;

export const Container = styled.View`
  align-self: stretch;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.color};
`;
