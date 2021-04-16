import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import tail from 'mr-min-tail-css/react-native';
import { usersEffects, usersSelectors } from '~/store';
import { StyledUsersWrapper, StyledUsersTitle } from './styles';

const Users = () => {
  const dispatch = useDispatch();
  const allUsersData = useSelector((state) =>
    usersSelectors.getAllUsersData(state),
  );
  const allUsersLoading = useSelector((state) =>
    usersSelectors.getAllUsersLoading(state),
  );
  useEffect(() => {
    dispatch(usersEffects.getAllUsersRequest());
  }, []);
  return (
    <>
      <StyledUsersWrapper>
        <StyledUsersTitle style={[tail.fontBold, tail.textCenter]}>
          List Of Names
        </StyledUsersTitle>
        {allUsersLoading ? (
          <Text>Loading ....</Text>
        ) : (
          <View>
            {allUsersData?.map((item) => (
              <Text key={item.id}>{item?.name}</Text>
            ))}
          </View>
        )}
      </StyledUsersWrapper>
    </>
  );
};

export default Users;
