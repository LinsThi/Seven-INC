import 'styled-components';

import theme from '~/styles/theme';

declare module 'styled-components' {
  type TypeProps = typeof theme;

  export interface DefaultTheme extends TypeProps {}
}
