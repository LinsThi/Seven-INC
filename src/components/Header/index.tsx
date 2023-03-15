import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as Sty from './styles';

type Props = {
  valueInputSearch: string;
  handleChangeValueInputSearch: (value: string) => void;
};

export function Header({
  valueInputSearch,
  handleChangeValueInputSearch,
}: Props) {
  const { COLORS } = useTheme();

  function useIsLandscape() {
    const { height, width } = useWindowDimensions();
    return width > height;
  }

  return (
    <Sty.Container>
      <Sty.ContainerSearch
        style={useIsLandscape() ? { width: '90%' } : { width: '85%' }}
      >
        <Sty.Search
          value={valueInputSearch}
          onChangeText={handleChangeValueInputSearch}
        />
      </Sty.ContainerSearch>

      <Sty.Button>
        <Sty.IconHeader name="plus-box" size={45} color={COLORS.GREEN} />
      </Sty.Button>
    </Sty.Container>
  );
}
