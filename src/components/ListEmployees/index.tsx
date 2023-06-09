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
  expandedItem: EmployeesProps;
  setExpandedItem: (employee: EmployeesProps) => void;
};

export function ListEmployees({
  listRender,
  handleRemoveEmployee,
  expandedItem,
  setExpandedItem,
}: ListEmployessProps) {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleSetExpandedItems = useCallback(
    (selectedEmployee: EmployeesProps) => {
      if (selectedEmployee.document === expandedItem.document) {
        return setExpandedItem({} as EmployeesProps);
      }

      return setExpandedItem(selectedEmployee);
    },
    [expandedItem.document, setExpandedItem],
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

  const removeEmployee = useCallback(() => {
    handleRemoveEmployee(expandedItem);

    handleChangeVisibleModal();
  }, [expandedItem, handleRemoveEmployee]);

  return (
    <Sty.Container>
      <ModalRemove
        visibleModal={visibleModal}
        handleChangeVisibleModal={handleChangeVisibleModal}
        title="Remover funcionário"
        description={`Você confirma que deseja remover o funcionário ${expandedItem.name}?`}
        buttonProps={[
          {
            title: 'Cancelar',
            backgrounButton: 'MAIN',
            onPress: () => handleChangeVisibleModal(),
          },
          {
            title: 'Confirmar',
            backgrounButton: 'RED',
            onPress: () => removeEmployee(),
          },
        ]}
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
