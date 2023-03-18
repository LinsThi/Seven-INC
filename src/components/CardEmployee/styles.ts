import { ComponentType } from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { vs, ms } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { EmployeesProps } from '~/DTOS/employees';

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
  height: ${({ isExpanded }) => (isExpanded ? vs(240) : vs(96))}px;
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
  justify-content: flex-start;
  margin-top: ${vs(10)}px;
`;

export const ItemInfo = styled.View`
  flex: 1;
  margin: 0 ${ms(20)}px;
`;

export const NameEmployee = styled.Text.attrs({ numberOfLines: 1 })`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.FONTS.INTER_BOLD};
  width: ${RFValue(250)}px;
`;

export const TextInfoMore = styled.Text.attrs({ numberOfLines: 1 })`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.INTER_REGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-top: ${vs(5)}px;
`;

export const HighlightedText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.INTER_BOLD};
`;

export const Icon = styled(MaterialComunityIcon).attrs<IconProps>(
  ({ name, color, size }) => ({ name, color, size: RFValue(size) }),
)``;

export const Button = styled.TouchableOpacity`
  margin-right: ${ms(20)}px;
`;

export const Flatlist = styled.FlatList`
  width: 100%;
  margin-top: ${vs(10)}px;
` as ComponentType as new () => FlatList<EmployeesProps>;
