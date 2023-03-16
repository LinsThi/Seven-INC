import React, { useCallback, useState } from 'react';

import { EmployeesProps } from '~/DTOS/employees';

import { CardEmployee } from '../CardEmployee';
import { ModalRemove } from '../ModalRemove';

import * as Sty from './styles';

export type ItemListEmployeeProps = {
  item: EmployeesProps;
};

type ListEmployessProps = {
  listRender: EmployeesProps[];
  handleRemoveEmployee: (employeeInfo: EmployeesProps) => void;
};

export function ListEmployees({
  listRender,
  handleRemoveEmployee,
}: ListEmployessProps) {
  const [expandedItem, setExpandedItem] = useState<EmployeesProps>(
    {} as EmployeesProps,
  );
  const [visibleModal, setVisibleModal] = useState(false);

  const handleSetExpandedItems = useCallback(
    (selectedEmployee: EmployeesProps) => {
      if (selectedEmployee.document === expandedItem.document) {
        return setExpandedItem({} as EmployeesProps);
      }

      return setExpandedItem(selectedEmployee);
    },
    [expandedItem],
  );

  const verifyIfItemExpanded = useCallback(
    (selectedEmployee: EmployeesProps) => {
      return expandedItem.document === selectedEmployee.document;
    },
    [expandedItem],
  );

  const handleChangeVisibleModal = () => {
    setVisibleModal(prev => !prev);
  };

  return (
    <Sty.Container>
      <ModalRemove
        visibleModal={visibleModal}
        handleChangeVisibleModal={handleChangeVisibleModal}
        employeeInfo={expandedItem}
        handleRemoveEmployee={handleRemoveEmployee}
      />

      <Sty.Flatlist
        data={listRender}
        extraData={listRender}
        renderItem={({ item }) => (
          <CardEmployee
            employeeInfo={{ item }}
            handleSetExpandedItems={handleSetExpandedItems}
            isExpanded={verifyIfItemExpanded(item)}
            handleChangeVisibleModal={handleChangeVisibleModal}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </Sty.Container>
  );
}
