import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as Sty from './styles';

type Props = ViewProps;

export function SearchInput({ ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Sty.Container {...rest}>
      <Sty.Input placeholder="Busque um funcionário" />

      <Sty.Icon name="account-search" size={30} color={COLORS.LIGHT_GRAY} />
    </Sty.Container>
  );
}
