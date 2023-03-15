import React, { useCallback } from 'react';
import { Modal } from 'react-native';
import { useTheme } from 'styled-components/native';
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
  const { COLORS } = useTheme();

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
            <Sty.TextBold>{employeeInfo.name}</Sty.TextBold> ?
          </Sty.TextInfo>

          <Sty.ContainerButton>
            <Sty.ButtonModal
              title="Cancelar"
              style={{ backgroundColor: COLORS.BG_BUTTON_CANCEL }}
              titleColor="white"
              titleBold
              onPress={handleChangeVisibleModal}
            />

            <Sty.ButtonModal
              title="Confirmar"
              style={{ backgroundColor: COLORS.BG_BUTTON_CONFIRM }}
              titleBold
              titleColor="white"
              onPress={removeEmployee}
            />
          </Sty.ContainerButton>
        </Sty.Content>
      </Sty.Container>
    </Modal>
  );
}
