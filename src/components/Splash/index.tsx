import React from 'react';

import splashIMG from '../../../assetsExpo/splashscreen.png';
import { StatusBar } from '../StatusBar';

import * as Sty from './styles';

export function Splash() {
  return (
    <Sty.ImageBg source={splashIMG}>
      <StatusBar />
    </Sty.ImageBg>
  );
}
