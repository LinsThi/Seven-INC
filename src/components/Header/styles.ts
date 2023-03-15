import styled from 'styled-components/native';
import MaterialComunityIcon, { IconProps } from '../IconMaterialComunity';
import { RFValue } from 'react-native-responsive-fontsize';
import { SearchInput } from '../SearchInput';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerSearch = styled.View``;

export const Search = styled(SearchInput)``;

export const Button = styled.TouchableOpacity``;

export const IconHeader = styled(MaterialComunityIcon).attrs<IconProps>(
  ({ name, color, size }) => ({ name, color: color, size: RFValue(size) }),
)``;
