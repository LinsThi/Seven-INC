import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components/native';

import { Input } from '~/components/Input';

import { EmployeesProps } from '~/DTOS/employees';
import MockEmployees from '~/mock/employees';
import { maskDate, maskCPF, maskPhoneNumber } from '~/utils/maskInput';

import * as Sty from './styles';

type PropsParams = RouteProp<
  { params: { currentEmployee?: EmployeesProps } },
  'params'
>;

export function EditEmployee() {
  const { COLORS } = useTheme();
  const { goBack, navigate } = useNavigation();

  const route = useRoute<PropsParams>();
  const { params } = route;

  const [name, setName] = useState(params?.currentEmployee?.name || '');
  const [document, setDocument] = useState(
    params?.currentEmployee?.document || '',
  );
  const [email, setEmail] = useState(params?.currentEmployee?.email || '');
  const [phone, setPhone] = useState(params?.currentEmployee?.phone || '');
  const [birthDate, setBirthDate] = useState(
    params?.currentEmployee?.birth_date || '',
  );
  const [salary, setSalary] = useState(params?.currentEmployee?.salary || '');
  const [createdAt, setCreatedAt] = useState(
    params?.currentEmployee?.created_at || '',
  );

  const handleAddEmployee = useCallback(() => {
    const newEmployeeInfo: EmployeesProps = {
      id: Number(params?.currentEmployee?.id),
      name,
      document,
      email,
      phone,
      birth_date: birthDate,
      salary,
      created_at: createdAt,
    };

    MockEmployees.push(newEmployeeInfo);
    navigate('Home');
  }, [
    params?.currentEmployee?.id,
    name,
    document,
    email,
    phone,
    birthDate,
    salary,
    createdAt,
    navigate,
  ]);

  const handleUpdateEmployee = useCallback(() => {
    const idExployee = Number(params.currentEmployee?.id);

    const updatedEmployeeInfo: EmployeesProps = {
      id: idExployee,
      name,
      document,
      email,
      phone,
      birth_date: birthDate,
      salary,
      created_at: createdAt,
    };

    const indextUpdate = MockEmployees.findIndex(
      currentEmployee => currentEmployee.id === idExployee,
    );

    MockEmployees[indextUpdate] = updatedEmployeeInfo;
    navigate('Home');
  }, [
    params?.currentEmployee?.id,
    name,
    document,
    email,
    phone,
    birthDate,
    salary,
    createdAt,
    navigate,
  ]);

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
            value={document}
            onChangeText={value => {
              setDocument(maskCPF(value));
            }}
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
            value={phone}
            onChangeText={value => {
              setPhone(maskPhoneNumber(value));
            }}
            keyboardType="number-pad"
            maxLength={16}
          />

          <Input
            label="Nascimento"
            isEmpty={!!birthDate}
            value={birthDate}
            onChangeText={value => {
              setBirthDate(maskDate(value));
            }}
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
              value={createdAt}
              onChangeText={value => {
                setCreatedAt(maskDate(value));
              }}
              keyboardType="number-pad"
              maxLength={10}
            />
          </Sty.TwiceInputs>

          <Sty.ButtonConfirm
            title={params?.currentEmployee ? 'Atualizar' : 'Cadastrar'}
            titleColor="white"
            titleBold
            onPress={
              params?.currentEmployee
                ? () => handleUpdateEmployee()
                : () => handleAddEmployee()
            }
          />
        </Sty.Form>
      </Sty.Content>
    </Sty.Container>
  );
}
