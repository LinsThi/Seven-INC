import React, { useEffect, useRef, useState } from 'react';
import { TextInputProps, Animated, Easing } from 'react-native';
import { vs } from 'react-native-size-matters';
import { useTheme } from 'styled-components/native';

import * as Sty from './styles';

export type InputProps = TextInputProps & {
  label: string;
  isEmpty?: boolean;
};

export function Input({ label, isEmpty = true, ...rest }: InputProps) {
  const { COLORS } = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const focusAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnimation, {
      toValue: isFocused || isEmpty ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0, 0, 0.58, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnimation, isFocused, isEmpty]);

  return (
    <Sty.Container>
      <Sty.ContainerLabel
        isFocused={isFocused}
        isEmpty={isEmpty}
        pointerEvents="none"
        style={{
          transform: [
            {
              translateY: focusAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [vs(33), vs(-5)],
              }),
            },
          ],
        }}
      >
        <Sty.TextLabel isEmpty={isEmpty} isFocused={isFocused}>
          {label}
        </Sty.TextLabel>
      </Sty.ContainerLabel>
      <Sty.Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        selectionColor={COLORS.RED}
        isFocused={isFocused}
        isEmpty={isEmpty}
        cursorColor={COLORS.BLACK}
        {...rest}
      />
    </Sty.Container>
  );
}
