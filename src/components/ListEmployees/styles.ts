import { ComponentType } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { EmployeesProps } from '~/DTOS/employees';
import { RFValue } from 'react-native-responsive-fontsize';
import { vs, ms } from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerItem = styled.TouchableOpacity`
  background-color: #dcdcdc;
  margin-bottom: ${RFValue(15)}px;
  padding: ${vs(15)}px ${ms(5)}px;
  border-radius: ${RFValue(10)}px;

  flex-direction: row;
`;

export const ItemInfo = styled.View`
  margin-left: ${ms(10)}px;
`;

export const ImageEmployee = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: ${RFValue(100)}px;
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

export const Flatlist = styled.FlatList`
  width: 100%;
  margin-top: ${vs(10)}px;
` as ComponentType as new () => FlatList<EmployeesProps>;
