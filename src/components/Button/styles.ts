import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type ButtonTextProps = {
  titleColor?: 'white' | 'default';
  titleBold?: boolean;
  disableFull: boolean;
};

export const Container = styled(TouchableOpacity)<ButtonTextProps>`
  justify-content: center;
  align-items: center;

  margin-bottom: ${RFValue(10)}px;
  padding: ${RFValue(10)}px 0;
  border-radius: ${RFValue(15)}px;

  background-color: ${({ disableFull, theme }) =>
    disableFull ? theme.COLORS.LIGHT_GRAY : theme.COLORS.BLUE};
`;

export const TextButton = styled.Text<ButtonTextProps>`
  font-size: ${RFValue(20)}px;
  font-weight: ${({ titleBold }) => (titleBold ? 'bold' : 'normal')};
  color: ${({ titleColor, disableFull, theme }) =>
    titleColor === 'white' || disableFull
      ? theme.COLORS.WHITE
      : theme.COLORS.BLACK};
`;
