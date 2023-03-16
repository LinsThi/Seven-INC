import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { maskDate, maskCPF, maskPhoneNumber } from '~/utils/maskInput';

import * as Sty from './styles';

export function EditEmployee() {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [salary, setSalary] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  return (
    <Sty.Container>
      <Sty.ContainerHeader>
        <Sty.Button onPress={() => goBack()}>
          <Sty.Icon name="arrow-left" size={30} color={COLORS.WHITE} />
        </Sty.Button>

        <Sty.Title>Voltar</Sty.Title>
      </Sty.ContainerHeader>

      <Sty.Content>
        <Sty.Form>
          <Input
            label="Nome"
            isEmpty={!!name}
            value={name}
            onChangeText={setName}
          />

          <Input
            label="CPF"
            isEmpty={!!document}
            value={maskCPF(document)}
            onChangeText={setDocument}
            keyboardType="number-pad"
            maxLength={14}
          />

          <Input
            label="E-mail"
            isEmpty={!!email}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Input
            label="Telefone"
            isEmpty={!!phone}
            value={maskPhoneNumber(phone)}
            onChangeText={setPhone}
            keyboardType="number-pad"
            maxLength={16}
          />

          <Input
            label="Nascimento"
            isEmpty={!!birthDate}
            value={maskDate(birthDate)}
            onChangeText={setBirthDate}
            keyboardType="number-pad"
            maxLength={10}
          />

          <Sty.TwiceInputs>
            <Input
              label="Salário"
              isEmpty={!!salary}
              value={salary}
              onChangeText={setSalary}
              keyboardType="number-pad"
              style={{ width: '80%' }}
            />

            <Input
              label="Contratação"
              isEmpty={!!createdAt}
              value={maskDate(createdAt)}
              onChangeText={setCreatedAt}
              keyboardType="number-pad"
              maxLength={10}
            />
          </Sty.TwiceInputs>

          <Sty.ButtonConfirm title="Confirmar" titleColor="white" titleBold />
        </Sty.Form>
      </Sty.Content>
    </Sty.Container>
  );
}
