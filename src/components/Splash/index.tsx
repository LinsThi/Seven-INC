import React from 'react';
import { StatusBar } from 'react-native';

import theme from '~/styles/theme';

import splashIMG from '../../../assetsExpo/splashscreen.png';

import * as Sty from './styles';

export function Splash() {
  return (
    <Sty.ImageBg source={splashIMG}>
      <StatusBar barStyle="light-content" backgroundColor={theme.COLORS.MAIN} />
    </Sty.ImageBg>
  );
}
