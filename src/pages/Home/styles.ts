import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.MAIN};
  padding-top: ${vs(30)}px;
`;
export const Content = styled.View`
  width: 90%;
  flex: 1;
`;
