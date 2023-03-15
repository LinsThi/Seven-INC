import React, { useCallback } from 'react';
import { Modal } from 'react-native';
import { EmployeesProps } from '~/DTOS/employees';

import * as Sty from './styles';

type Props = {
  employeeInfo: EmployeesProps;
  visibleModal: boolean;
  handleChangeVisibleModal: () => void;
  handleRemoveEmployee: (employeeInfo: EmployeesProps) => void;
};

export function ModalRemove({
  employeeInfo,
  handleChangeVisibleModal,
  visibleModal,
  handleRemoveEmployee,
}: Props) {
  const removeEmployee = useCallback(() => {
    handleRemoveEmployee(employeeInfo);

    handleChangeVisibleModal();
  }, [employeeInfo]);

  return (
    <Modal
      visible={visibleModal}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <Sty.Container>
        <Sty.Content>
          <Sty.ButtonClose onPress={handleChangeVisibleModal}>
            <Sty.Icon name="close" size={30} color="gray" />
          </Sty.ButtonClose>
          <Sty.Title>Remover funcionário</Sty.Title>

          <Sty.TextInfo>
            Você confirmar que deseja remover o funcionário{' '}
            <Sty.TextBold>{employeeInfo.name}</Sty.TextBold>?
          </Sty.TextInfo>

          <Sty.ContainerButton>
            <Sty.ButtonModal
              title="Cancelar"
              style={{ backgroundColor: 'red' }}
              onPress={handleChangeVisibleModal}
            />

            <Sty.ButtonModal title="Confirmar" onPress={removeEmployee} />
          </Sty.ContainerButton>
        </Sty.Content>
      </Sty.Container>
    </Modal>
  );
}
