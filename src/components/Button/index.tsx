import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Sty from './styles';

type Props = {
  title: string;
  disabledFull?: boolean;
} & TouchableOpacityProps;

export function Button({ title, disabledFull = false, ...rest }: Props) {
  return (
    <Sty.Container disabled={disabledFull} disableFull={disabledFull} {...rest}>
      <Sty.TextButton disableFull={disabledFull}>{title}</Sty.TextButton>
    </Sty.Container>
  );
}
