import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';

import * as Sty from './styles';

type Props = {
  title: string;
} & TouchableOpacityProps;

export function Button({ title, ...rest }: Props) {
  return (
    <Sty.Container {...rest}>
      <Sty.TextButton>{title}</Sty.TextButton>
    </Sty.Container>
  );
}
