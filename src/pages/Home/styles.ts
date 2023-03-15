import styled from 'styled-components/native';
import { vs, ms } from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.MAIN};
  padding-top: ${vs(30)}px;
`;

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 90%;
  flex: 1;
`;

export const Logo = styled.Image`
  width: ${ms(200)}px;
  height: ${vs(50)}px;
`;
