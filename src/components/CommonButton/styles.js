import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const CommonButtonContainer = styled(RectButton)`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background: ${colors.secondaryVariant};

  align-items: center;
  justify-content: center;
`;
