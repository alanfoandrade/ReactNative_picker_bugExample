import styled from 'styled-components/native';

import Input from '../../../components/Input';
import InputMasked from '../../../components/InputMasked';
import SelectInput from '../../../components/SelectInput';
import FileInput from '../../../components/FileInput';

import CommonButton from '../../../components/CommonButton';
import SubmitButton from '../../../components/SubmitButton';

import colors from '../../../styles/colors';

export const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'always',
})`
  align-self: stretch;
`;

export const FormContainer = styled.View`
  align-self: stretch;
  margin-top: 10px;
`;

export const FormInput = styled(Input).attrs({
  color: `${colors.secondaryVariant}`,
  inputColor: `${colors.black80}`,
})`
  flex: 1;
  margin-bottom: 30px;
  color: ${colors.secondaryVariant};
`;

export const FormInputMasked = styled(InputMasked).attrs({
  color: `${colors.secondaryVariant}`,
  inputColor: `${colors.black80}`,
})`
  flex: 1;
  margin-bottom: 30px;
  color: ${colors.secondaryVariant};
`;

export const FormSelect = styled(SelectInput).attrs({
  color: `${colors.secondaryVariant}`,
})`
  margin-bottom: 30px;
`;

export const StyledFileInput = styled(FileInput).attrs({
  color: `${colors.secondaryVariant}`,
})`
  flex: 1;
  color: ${colors.secondaryVariant};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputTitle = styled.Text`
  font-size: 16px;
  color: ${colors.secondaryVariant};
`;

export const StyledAddButton = styled(CommonButton)`
  margin-left: 15px;
`;

export const SaveButton = styled(SubmitButton)`
  background: ${colors.primaryVariant};

  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
`;
