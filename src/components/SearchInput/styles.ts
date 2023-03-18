import { TextInput, TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import MaterialComunityIcon, { IconProps } from '../IconMaterialComunity';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  padding: ${RFValue(10)}px;
  flex-direction: row;
  border-radius: ${RFValue(10)}px;
`;

export const Icon = styled(MaterialComunityIcon).attrs<IconProps>(
  ({ name, color, size }) => ({ name, color, size: vs(size) }),
)``;

export const Input = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.COLOR_LABEL_INPUT,
}))`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.COLOR_LABEL_INPUT};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.INTER_BOLD};
`;
