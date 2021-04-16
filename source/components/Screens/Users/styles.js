import styled from 'styled-components/native';
import { View, Text } from 'react-native';

import { color, px } from '~/constants/theme/helpers';

export const StyledUsersWrapper = styled(View)`
  position: relative;
  background-color: ${color('green', 'light')};
  padding: ${px(30)};
`;
export const StyledUsersTitle = styled(Text)`
  padding-bottom: ${px(30)};
  color: ${color('blue', 'dark')};
`;
