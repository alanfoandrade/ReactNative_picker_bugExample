import styled from 'styled-components/native';

import RNAutocompleteInput from 'react-native-autocomplete-input';
import CommonButton from '../CommonButton';

import colors from '../../styles/colors';

export const AutoCompleteContainer = styled.View`
  position: absolute;
  flex: 1;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const Autocomplete = styled(RNAutocompleteInput).attrs({
  inputContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: `${colors.secondaryVariant}`,
    marginRight: 45,
    height: 40,
  },
  listStyle: {
    margin: 0,
    marginRight: 45,
    maxHeight: 100,
  },
})`
  font-size: 16px;
  color: ${colors.black80};
`;

export const OptionText = styled.Text`
  color: ${colors.black80};
  font-size: 16px;
  padding: 0 6px;
  margin: 2px;
`;

export const StyledAddButton = styled(CommonButton)`
  position: absolute;
  right: 0;
  top: 10px;
`;
