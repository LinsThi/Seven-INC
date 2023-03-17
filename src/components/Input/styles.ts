import { Animated, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ms, vs } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

type InputTextProps = {
  isFocused: boolean;
  isEmpty: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: ${vs(10)}px 0 0;
  margin-bottom: ${vs(10)}px;
`;

export const ContainerLabel = styled(Animated.View)<InputTextProps>`
  position: absolute;
  z-index: 1;
  margin-left: ${({ isFocused, isEmpty }) =>
    isFocused || isEmpty ? ms(5) : ms(10)}px;
`;

export const TextLabel = styled(Animated.Text)<InputTextProps>`
  font-size: ${({ isFocused, isEmpty }) =>
    isFocused || isEmpty ? RFValue(16) : RFValue(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.COLOR_LABEL_INPUT};

  ${props =>
    (props.isFocused || props.isEmpty) &&
    css`
      color: ${({ theme }) => theme.COLORS.WHITE};
    `};
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED};
  font-size: ${RFValue(15)}px;
`;

export const Input = styled(TextInput)<InputTextProps>`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 8px;
  border-radius: 6px;
  padding: ${ms(15)}px;
  padding-left: 10px;
  font-size: ${vs(15)}px;
`;
