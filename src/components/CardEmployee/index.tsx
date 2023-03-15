import React from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';
import { FlatListProps } from '../ListEmployees';

import * as Sty from './styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  employeeInfo: FlatListProps;
  handleSetExpandedItems: (indexNumber: number) => void;
  isExpanded: boolean;
};

export function CardEmployee({
  employeeInfo,
  handleSetExpandedItems,
  isExpanded,
}: Props) {
  const { index, item } = employeeInfo;

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <Sty.ContainerItem
      onPress={() => {
        handleSetExpandedItems(Number(index));
      }}
    >
      <Sty.ImageEmployee source={{ uri: item.image }} />
      <Sty.ItemInfo>
        <Sty.NameEmployee>{item.name}</Sty.NameEmployee>

        {isExpanded ? (
          <>
            <Sty.TextInfoMore>Eita</Sty.TextInfoMore>
            <Sty.TextInfoMore>Eita</Sty.TextInfoMore>
            <Sty.TextInfoMore>Eita</Sty.TextInfoMore>
            <Sty.TextInfoMore>Eita</Sty.TextInfoMore>
            <Sty.TextInfoMore>Eita</Sty.TextInfoMore>
            <Sty.TextInfoMore>Eita</Sty.TextInfoMore>
            <Sty.TextInfoMore>Eita</Sty.TextInfoMore>
            <Sty.TextInfoMore>Eita</Sty.TextInfoMore>
            <Sty.TextInfoMore>Eita</Sty.TextInfoMore>
          </>
        ) : (
          <Sty.TextInfoMore>Toque para ver mais</Sty.TextInfoMore>
        )}
      </Sty.ItemInfo>
    </Sty.ContainerItem>
  );
}
