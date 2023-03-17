import { RFValue } from 'react-native-responsive-fontsize';
import { ms, vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: ${vs(55)}px;
  width: 90%;
  background-color: #f4f4f4;
  border-left-width: 5px;
  border-left-color: #90e57a;
  border-radius: ${RFValue(6)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${vs(15)}px 0;
  margin-left: ${ms(10)}px;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #8d8d8d;
  font-weight: bold;
`;
