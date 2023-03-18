import React from 'react';
import { Modal } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as Sty from './styles';

interface ButtonOptionType {
  title: string;
  onPress: () => void;
  backgrounButton: 'MAIN' | 'GREEN' | 'RED';
}

type Props = {
  visibleModal: boolean;
  handleChangeVisibleModal: () => void;
  title: string;
  description: string;
  buttonProps: ButtonOptionType[];
};

export function ModalRemove({
  handleChangeVisibleModal,
  title,
  description,
  visibleModal,
  buttonProps,
}: Props) {
  const { COLORS } = useTheme();

  return (
    <Modal visible={visibleModal} animationType="fade" statusBarTranslucent>
      <Sty.Container>
        <Sty.Content>
          <Sty.ButtonClose onPress={handleChangeVisibleModal}>
            <Sty.Icon name="close" size={30} color={COLORS.GRAY} />
          </Sty.ButtonClose>
          <Sty.Title>{title}</Sty.Title>

          <Sty.TextInfo>{description}</Sty.TextInfo>

          <Sty.ContainerButton>
            {buttonProps.map(currentButton => (
              <Sty.ButtonModal
                key={currentButton.title}
                title={currentButton.title}
                style={{
                  backgroundColor: COLORS[currentButton.backgrounButton],
                }}
                onPress={currentButton.onPress}
              />
            ))}
          </Sty.ContainerButton>
        </Sty.Content>
      </Sty.Container>
    </Modal>
  );
}
