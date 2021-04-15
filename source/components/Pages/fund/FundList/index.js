import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { usersEffects, usersSelectors } from '~/store';
import { StyledFundListBanner } from './styles';

const FundsList = () => {
  const dispatch = useDispatch();
  const allUsersData = useSelector((state) => usersSelectors.getAllUsersData(state));

  console.log('data :>> ', allUsersData);
  useEffect(() => {
    dispatch(usersEffects.getAllUsersRequest());
  }, []);
  return (
    <>
      <StyledFundListBanner>
        <View className="header-title">
          <Text>سرمایه‌گذار باشید</Text>
          <Text>به قله‌ی آرزوهایتان سفر کنید</Text>
        </View>
      </StyledFundListBanner>
    </>
  );
};

export default FundsList;
