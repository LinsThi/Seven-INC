import React from 'react';
import { useTheme } from 'styled-components/native';

import * as Sty from './styles';

export function Header() {
  const { COLORS } = useTheme();

  return (
    <Sty.Container>
      <Sty.Search />

      <Sty.IconHeader name="plus-box" size={45} color={COLORS.GREEN} />
    </Sty.Container>
  );
}
