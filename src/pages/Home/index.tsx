import React, { useCallback, useState } from 'react';
import { Header } from '~/components/Header';
import { ListEmployees } from '~/components/ListEmployees';
import { EmployeesProps } from '~/DTOS/employees';
import MockEmployees from '~/mock/employees';

import * as Sty from './styles';

export function Home() {
  const [listRender, setListRender] = useState(MockEmployees);
  const [searchValue, setSearchValue] = useState('');

  const filteredData = searchValue
    ? listRender.filter(currrentEmployee =>
        currrentEmployee.name.toLowerCase().includes(searchValue),
      )
    : listRender;

  const handleChangeValueInput = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleRemoveEmployee = useCallback(
    (employeeInfo: EmployeesProps) => {
      const dataArray = [...listRender];

      const indexRemove = dataArray.findIndex(
        currentEmployee => currentEmployee.id === employeeInfo.id,
      );

      dataArray.splice(indexRemove, 1);

      setListRender(dataArray);
    },
    [listRender],
  );

  return (
    <Sty.Container>
      <Sty.Content>
        <Header
          valueInputSearch={searchValue}
          handleChangeValueInputSearch={handleChangeValueInput}
        />

        <ListEmployees
          listRender={filteredData}
          handleRemoveEmployee={handleRemoveEmployee}
        />
      </Sty.Content>
    </Sty.Container>
  );
}
