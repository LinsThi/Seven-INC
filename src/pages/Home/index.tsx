import React from 'react';
import { Header } from '~/components/Header';
import { ListEmployees } from '~/components/ListEmployees';

import * as Sty from './styles';

export function Home() {
  return (
    <Sty.Container>
      <Sty.Content>
        <Header />

        <ListEmployees />
      </Sty.Content>
    </Sty.Container>
  );
}
