import React from 'react';
import { StatusBar as StatusBarComponent } from 'react-native';

import theme from '~/styles/theme';

import * as Sty from './styles';

export function StatusBar() {
  return (
    <Sty.Container>
      <StatusBarComponent
        barStyle="light-content"
        backgroundColor={theme.COLORS.MAIN}
      />
    </Sty.Container>
  );
}
