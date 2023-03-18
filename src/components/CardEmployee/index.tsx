import { useNavigation } from '@react-navigation/native';
import { LayoutAnimation, Platform, UIManager } from 'react-native';
import { useTheme } from 'styled-components/native';

import { EmployeesProps } from '~/DTOS/employees';

import { ItemListEmployeeProps } from '../ListEmployees';

import * as Sty from './styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  employeeInfo: ItemListEmployeeProps;
  handleSetExpandedItems: (selectedEmployee: EmployeesProps) => void;
  isExpanded: boolean;
  handleChangeVisibleModal: () => void;
};

export function CardEmployee({
  employeeInfo,
  handleSetExpandedItems,
  isExpanded,
  handleChangeVisibleModal,
}: Props) {
  const { item } = employeeInfo;
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();

  const handleNavigateEditEmployeeScreen = () => {
    navigate('EditEmployee', { currentEmployee: employeeInfo.item });
  };

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <Sty.ContainerItem
      onPress={() => {
        handleSetExpandedItems(employeeInfo.item);
      }}
      isExpanded={isExpanded}
    >
      <Sty.ItemInfo>
        <Sty.ContainerEmployeeInfo>
          <Sty.NameEmployee>{item.name}</Sty.NameEmployee>

          {isExpanded ? (
            <Sty.Icon name="arrow-up" size={30} color={COLORS.BLACK} />
          ) : (
            <Sty.Icon name="arrow-down" size={30} color={COLORS.BLACK} />
          )}
        </Sty.ContainerEmployeeInfo>

        {isExpanded ? (
          <>
            <Sty.TextInfoMore>
              <Sty.HighlightedText>E-mail:</Sty.HighlightedText> {item.email}
            </Sty.TextInfoMore>

            <Sty.TextInfoMore>
              <Sty.HighlightedText>Telefone:</Sty.HighlightedText> {item.phone}
            </Sty.TextInfoMore>

            <Sty.TextInfoMore>
              <Sty.HighlightedText>Salário: R$</Sty.HighlightedText>{' '}
              {item.salary}
            </Sty.TextInfoMore>

            <Sty.TextInfoMore>
              <Sty.HighlightedText>Data de contratação:</Sty.HighlightedText>{' '}
              {item.created_at}
            </Sty.TextInfoMore>

            <Sty.ContainerButtons>
              <Sty.Button onPress={handleNavigateEditEmployeeScreen}>
                <Sty.Icon
                  name="square-edit-outline"
                  size={30}
                  color={COLORS.BLACK}
                />
              </Sty.Button>

              <Sty.Button onPress={handleChangeVisibleModal}>
                <Sty.Icon name="trash-can" size={30} color={COLORS.BLACK} />
              </Sty.Button>
            </Sty.ContainerButtons>
          </>
        ) : (
          <Sty.TextInfoMore>Toque para ver mais</Sty.TextInfoMore>
        )}
      </Sty.ItemInfo>
    </Sty.ContainerItem>
  );
}
