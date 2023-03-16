import { EmployeesProps } from '~/DTOS/employees';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      EditEmployee: { currentEmployee: EmployeesProps } | undefined;
    }
  }
}
