import { RFValue } from 'react-native-responsive-fontsize';
import { ms, vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { Button as Btn } from '~/components/Button';
import MaterialComunityIcon, {
  IconProps,
} from '~/components/IconMaterialComunity';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.MAIN};
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${vs(10)}px ${ms(20)}px 0;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${vs(40)}px;
`;

export const Form = styled.View`
  padding: 0 ${ms(30)}px;
`;

export const TwiceInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.FONTS.INTER_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-left: ${ms(10)}px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonConfirm = styled(Btn)`
  margin: ${vs(10)}px 0 ${vs(30)}px;
  border-radius: ${RFValue(5)}px;
`;

export const Icon = styled(MaterialComunityIcon).attrs<IconProps>(
  ({ name, color, size }) => ({ name, color, size: RFValue(size) }),
)``;
