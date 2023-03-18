import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as Sty from './styles';

type Props = TextInputProps;

export function SearchInput({ ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Sty.Container>
      <Sty.Input placeholder="Busque um funcionário" {...rest} />

      <Sty.Icon
        name="account-search"
        size={30}
        color={COLORS.COLOR_LABEL_INPUT}
      />
    </Sty.Container>
  );
}
