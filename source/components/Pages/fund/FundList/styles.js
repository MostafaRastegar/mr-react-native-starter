import styled from 'styled-components';
import { View, Text } from 'react-native';

import { color, px } from '~/constants/theme/helpers';
export const StyledFundListBanner = styled(View)`
  position: relative;
`;

export const StyledFundListWrapper = styled(View)`
  padding: ${px(16, 16, 0)};
  margin-top: ${px(-80)};
  position: relative;
  background-color: ${color('green', 'normal')};
`;

export const StyledFundListItemWrapper = styled(View)``;

export const StyledFundListBadge = styled(Text)``;

export const StyledFundListRow = styled(View)`
  padding: ${px(0, 8)};
`;

export const StyledRecomendationCard = styled(View)``;
