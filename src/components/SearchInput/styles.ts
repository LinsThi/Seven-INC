import { TextInput, TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
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
  ({ name, color, size }) => ({ name, color, size }),
)``;

export const Input = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.LIGHT_GRAY,
}))`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.INTER_BOLD};
`;
