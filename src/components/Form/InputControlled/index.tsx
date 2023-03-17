import React from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

import { Input, InputProps } from '~/components/Input';

import { verifyMask } from '~/utils/maskInput';

type ControlledProps = InputProps & {
  control: Control<any>;
  name: string;
  mask?: 'CPF' | 'phone' | 'date' | '';
  label: string;
  rules?:
    | Omit<
        RegisterOptions<any, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
};

export function ControlledInput({
  control,
  name,
  mask = '',
  label,
  errorMessage,
  rules,
  ...rest
}: ControlledProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <Input
          onChangeText={text => onChange(verifyMask(text, mask))}
          value={value}
          isEmpty={!!value}
          label={label}
          errorMessage={errorMessage}
          {...rest}
        />
      )}
    />
  );
}
