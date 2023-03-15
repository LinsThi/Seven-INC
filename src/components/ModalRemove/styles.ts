import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { Button } from '../Button';
import MaterialComunityIcon, { IconProps } from '../IconMaterialComunity';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 330px;
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${RFValue(10)}px;
  padding-top: ${vs(25)}px;
  margin: 0 ${RFValue(10)}px;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  margin-top: ${vs(10)}px;
  justify-content: space-around;
  flex-direction: row;
  padding: ${RFValue(5)}px ${RFValue(15)}px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-weight: bold;
  text-align: center;
`;

export const TextInfo = styled.Text`
  font-size: ${RFValue(20)}px;
  text-align: center;

  margin: 0 ${RFValue(25)}px;
`;

export const TextBold = styled.Text`
  font-weight: bold;
`;

export const ButtonModal = styled(Button)`
  width: 45%;
`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: ${RFValue(10)}px;
  right: ${RFValue(10)}px;
`;

export const Icon = styled(MaterialComunityIcon).attrs<IconProps>(
  ({ name, color, size }) => ({ name, color: color, size: RFValue(size) }),
)`
  background-color: white;
`;
