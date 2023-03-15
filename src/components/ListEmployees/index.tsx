import React, { useCallback, useState } from 'react';
import { EmployeesProps } from '~/DTOS/employees';
import MockEmployees from '~/mock/employees';
import { CardEmployee } from '../CardEmployee';

import * as Sty from './styles';

export type FlatListProps = {
  index: number;
  item: EmployeesProps;
};

export function ListEmployees() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const handleSetExpandedItems = useCallback(
    (idItem: number) => {
      if (!verifyIfItemExpanded(idItem)) {
        return setExpandedItems(prev => [...prev, idItem]);
      }

      const indexInArray = expandedItems.findIndex(
        currentIndex => currentIndex === idItem,
      );

      const newArrayExpandedItems = [...expandedItems];
      newArrayExpandedItems.splice(indexInArray, 1);

      return setExpandedItems(newArrayExpandedItems);
    },
    [expandedItems],
  );

  const verifyIfItemExpanded = (idItem: number) => {
    return expandedItems.some(currentItem => currentItem === idItem);
  };

  return (
    <Sty.Container>
      <Sty.Flatlist
        data={MockEmployees}
        extraData={MockEmployees}
        renderItem={({ index, item }) => (
          <CardEmployee
            employeeInfo={{ index, item }}
            handleSetExpandedItems={handleSetExpandedItems}
            isExpanded={verifyIfItemExpanded(index)}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </Sty.Container>
  );
}
