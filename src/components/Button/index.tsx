import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Sty from './styles';

type Props = {
  title: string;
  titleColor?: 'white' | 'default';
  titleBold?: boolean;
} & TouchableOpacityProps;

export function Button({
  title,
  titleColor = 'default',
  titleBold = false,
  ...rest
}: Props) {
  return (
    <Sty.Container {...rest}>
      <Sty.TextButton titleColor={titleColor} titleBold={titleBold}>
        {title}
      </Sty.TextButton>
    </Sty.Container>
  );
}
