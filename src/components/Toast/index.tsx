import React from 'react';
import Toast, { BaseToastProps } from 'react-native-toast-message';

import * as Sty from './styles';

type ToastProps = {
  props: {
    title: string;
    nameEmployee: string;
    handleNavigate: (tab: string) => void;
  };
} & BaseToastProps;

const toastConfig = {
  employeeSucess: ({ text1, props }: ToastProps) => (
    <Sty.Container onPress={() => props.handleNavigate('CartTab')}>
      <Sty.Content>
        <Sty.Title>{text1}</Sty.Title>

        <Sty.Description>
          Você será redirecionado em alguns instantes.
        </Sty.Description>
      </Sty.Content>
    </Sty.Container>
  ),
};

const showToastSucessAddProduct = (
  title: string,
  name: string,
  handleNavigate: any,
) => {
  Toast.show({
    type: 'employeeSucess',
    text1: title,
    props: { name, handleNavigate },
    position: 'bottom',
    visibilityTime: 2000,
    onHide: handleNavigate,
  });
};

export { toastConfig, showToastSucessAddProduct };
