import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

import { ControlledInput } from '~/components/Form/InputControlled';
import { ModalRemove } from '~/components/ModalRemove';
import { showToastSucess } from '~/components/Toast';

import { EmployeesProps } from '~/DTOS/employees';
import MockEmployees from '~/mock/employees';
import {
  dateCreatedAtAfterBirthDate,
  isBeforeToday,
  isBiggerThan16,
  validYear,
} from '~/utils/functionsDate';

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
  const [visibleModal, setVisibleModal] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const route = useRoute<PropsParams>();
  const { params } = route;

  const {
    control,
    handleSubmit,
    formState: { isDirty, errors },
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

  const handleChangeVisibleModal = () => {
    setVisibleModal(prev => !prev);
  };

  const handleAddEmployee = useCallback(
    (data: FormData) => {
      setDisableButton(true);

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
      setDisableButton(true);

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

  const returnLastPage = useCallback(() => {
    if (!isDirty) {
      return goBack();
    }

    return handleChangeVisibleModal();
  }, [goBack, isDirty]);

  return (
    <Sty.Container>
      <Sty.ContainerHeader>
        <Sty.Button onPress={returnLastPage}>
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
              pattern: {
                value:
                  /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/i,
                message: 'Data inválida',
              },
              validate: {
                valid: value => validYear(value) || 'Data inválida',
                biggerThan16: value =>
                  isBiggerThan16(value) ||
                  'Empregado não pode ter menos de 16 anos',
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
              mask="number"
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
                pattern: {
                  value:
                    /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/i,
                  message: 'Data inválida',
                },
                validate: {
                  isBefore: value => isBeforeToday(value) || 'Data inválida',
                  createdAtAfterBirthDate: (value, formValues) =>
                    dateCreatedAtAfterBirthDate(value, formValues.birthDate) ||
                    'Empregado não pode ter menos de 16 anos',
                },
              }}
            />
          </Sty.TwiceInputs>

          <Sty.ButtonConfirm
            title={
              params?.currentEmployee
                ? 'Atualizar funcionário'
                : 'Cadastrar funcionário'
            }
            onPress={handleSubmit(handleSubmitAction)}
            disabledFull={!isDirty || disableButton}
          />
        </Sty.Form>
      </Sty.Content>

      <ModalRemove
        title="Existem alterações não salvas"
        description="Tem certeza de que deseja sair?"
        buttonProps={[
          {
            title: 'Ficar',
            backgrounButton: 'GREEN',
            onPress: () => handleChangeVisibleModal(),
          },
          { title: 'Sair', backgrounButton: 'RED', onPress: () => goBack() },
        ]}
        visibleModal={visibleModal}
        handleChangeVisibleModal={handleChangeVisibleModal}
      />
    </Sty.Container>
  );
}
