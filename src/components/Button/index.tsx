import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Sty from './styles';

type Props = {
  title: string;
  titleColor?: 'white' | 'default';
  titleBold?: boolean;
  disabledFull?: boolean;
} & TouchableOpacityProps;

export function Button({
  title,
  titleColor = 'default',
  titleBold = false,
  disabledFull = false,
  ...rest
}: Props) {
  return (
    <Sty.Container disabled={disabledFull} disableFull={disabledFull} {...rest}>
      <Sty.TextButton
        titleColor={titleColor}
        titleBold={titleBold}
        disableFull={disabledFull}
      >
        {title}
      </Sty.TextButton>
    </Sty.Container>
  );
}
