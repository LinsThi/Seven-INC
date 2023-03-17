import { ComponentType } from 'react';
import { FlatList } from 'react-native';
import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { EmployeesProps } from '~/DTOS/employees';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Flatlist = styled.FlatList`
  width: 100%;
  margin-top: ${vs(10)}px;
` as ComponentType as new () => FlatList<EmployeesProps>;
