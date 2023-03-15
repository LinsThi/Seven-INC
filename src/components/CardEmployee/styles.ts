import { ComponentType } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { EmployeesProps } from '~/DTOS/employees';
import { RFValue } from 'react-native-responsive-fontsize';
import { vs, ms } from 'react-native-size-matters';
import MaterialComunityIcon, { IconProps } from '../IconMaterialComunity';

type ContainerItemProps = {
  isExpanded: boolean;
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerItem = styled.TouchableOpacity<ContainerItemProps>`
  height: ${({ isExpanded }) => (isExpanded ? vs(195) : vs(96))}px;
  background-color: #dcdcdc;
  margin-bottom: ${RFValue(15)}px;
  padding: ${vs(15)}px ${ms(5)}px;
  border-radius: ${RFValue(10)}px;

  flex-direction: row;
`;

export const ContainerEmployeeInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${vs(10)}px;
`;

export const ItemInfo = styled.View`
  flex: 1;
  margin-left: ${ms(10)}px;
`;

export const NameEmployee = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: bold;
`;

export const InfoEmployee = styled.Text`
  font-size: ${RFValue(20)}px;
`;

export const TextInfoMore = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const HighlightedText = styled.Text`
  font-weight: bold;
`;

export const Icon = styled(MaterialComunityIcon).attrs<IconProps>(
  ({ name, color, size }) => ({ name, color: color, size: RFValue(size) }),
)``;

export const Button = styled.TouchableOpacity``;

export const Flatlist = styled.FlatList`
  width: 100%;
  margin-top: ${vs(10)}px;
` as ComponentType as new () => FlatList<EmployeesProps>;
