import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 5 : 0}px;
  background-color: ${theme.COLORS.MAIN};
`;
