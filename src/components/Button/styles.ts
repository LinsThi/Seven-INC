import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type ButtonTextProps = {
  disableFull: boolean;
};

export const Container = styled(TouchableOpacity)<ButtonTextProps>`
  justify-content: center;
  align-items: center;

  margin-bottom: ${RFValue(10)}px;
  padding: ${RFValue(10)}px 0;
  border-radius: ${RFValue(15)}px;

  background-color: ${({ theme }) => theme.COLORS.GREEN};

  ${props =>
    props.disableFull &&
    css`
      opacity: 0.5;
    `}
`;

export const TextButton = styled.Text<ButtonTextProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.INTER_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
