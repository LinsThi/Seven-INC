import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  margin-bottom: ${RFValue(10)}px;
  padding: ${RFValue(10)}px 0;
  border-radius: ${RFValue(15)}px;

  background-color: aqua;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(20)}px;
`;
