import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

import { ControlledInput } from '~/components/Form/InputControlled';
import { showToastSucess } from '~/components/Toast';

import { EmployeesProps } from '~/DTOS/employees';
import MockEmployees from '~/mock/employees';
import { isBeforeToday } from '~/utils/functionsDate';

import * as Sty from './styles';

type PropsParams = RouteProp<
  { params: { currentEmployee?: EmployeesProps } },
  'params'
>;

type FormData = {
  name: string;
  document: string;
  email: string;
  phone: string;
  birthDate: string;
  salary: string;
  createdAt: string;
};

export function EditEmployee() {
  const { COLORS } = useTheme();
  const { goBack, navigate } = useNavigation();

  const route = useRoute<PropsParams>();
  const { params } = route;

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormData>({
    defaultValues: {
      name: params?.currentEmployee?.name || '',
      document: params?.currentEmployee?.document || '',
      email: params?.currentEmployee?.email || '',
      phone: params?.currentEmployee?.phone || '',
      birthDate: params?.currentEmployee?.birth_date || '',
      salary: params?.currentEmployee?.salary || '',
      createdAt: params?.currentEmployee?.created_at || '',
    },
  });

  const handleAddEmployee = useCallback(
    (data: FormData) => {
      const { name, document, email, phone, birthDate, salary, createdAt } =
        data;

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

      showToastSucess('Funcionário cadastrado com sucesso!', name, () =>
        navigate('Home'),
      );
    },
    [params?.currentEmployee?.id, navigate],
  );

  const handleUpdateEmployee = useCallback(
    (data: FormData) => {
      const { name, document, email, phone, birthDate, salary, createdAt } =
        data;
      const idExployee = Number(params?.currentEmployee?.id);

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

      showToastSucess('Funcionário atualizado com sucesso!', name, () =>
        navigate('Home'),
      );
    },
    [params?.currentEmployee?.id, navigate],
  );

  const handleSubmitAction = useCallback(
    (data: FormData) => {
      if (params?.currentEmployee) {
        return handleUpdateEmployee(data);
      }

      return handleAddEmployee(data);
    },
    [handleAddEmployee, handleUpdateEmployee, params?.currentEmployee],
  );

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
          <ControlledInput
            control={control}
            name="name"
            label="Nome"
            errorMessage={errors?.name?.message}
            rules={{
              required: 'Nome inválido',
            }}
          />

          <ControlledInput
            control={control}
            name="document"
            label="CPF"
            errorMessage={errors?.document?.message}
            keyboardType="number-pad"
            mask="CPF"
            maxLength={14}
            rules={{
              required: 'Insira um CPF',
              minLength: {
                value: 14,
                message: 'CPF inválido',
              },
            }}
          />

          <ControlledInput
            control={control}
            name="email"
            label="E-mail"
            errorMessage={errors?.email?.message}
            keyboardType="email-address"
            rules={{
              required: 'Insira um E-mail',
              pattern: {
                value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
                message: 'E-mail inválido',
              },
            }}
          />

          <ControlledInput
            control={control}
            name="phone"
            label="Telefone"
            errorMessage={errors?.phone?.message}
            mask="phone"
            keyboardType="number-pad"
            maxLength={16}
            rules={{
              required: 'Insira um telefone válido',
              minLength: {
                value: 16,
                message: 'Telefone inválido',
              },
            }}
          />

          <ControlledInput
            control={control}
            name="birthDate"
            label="Data de nascimento"
            errorMessage={errors?.birthDate?.message}
            keyboardType="number-pad"
            mask="date"
            maxLength={10}
            rules={{
              required: 'Insira uma data de nascimento válida',
              minLength: {
                value: 10,
                message: 'Data de nascimento inválida',
              },
            }}
          />

          <Sty.TwiceInputs>
            <ControlledInput
              control={control}
              name="salary"
              label="Salário"
              errorMessage={errors?.salary?.message}
              keyboardType="number-pad"
              style={{ width: '80%' }}
              rules={{
                required: 'Insira um valor válido',
              }}
            />

            <ControlledInput
              control={control}
              name="createdAt"
              label="Contratação"
              errorMessage={errors?.createdAt?.message}
              keyboardType="number-pad"
              mask="date"
              maxLength={10}
              rules={{
                required: 'Insira um data válida',
                minLength: {
                  value: 10,
                  message: 'Data inválida',
                },
                validate: value => isBeforeToday(value) || 'Data inválida',
              }}
            />
          </Sty.TwiceInputs>

          <Sty.ButtonConfirm
            title={params?.currentEmployee ? 'Atualizar' : 'Cadastrar'}
            titleColor="white"
            titleBold
            onPress={handleSubmit(handleSubmitAction)}
            disabledFull={!isDirty || !isValid}
          />
        </Sty.Form>
      </Sty.Content>
    </Sty.Container>
  );
}
