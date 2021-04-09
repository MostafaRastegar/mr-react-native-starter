import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { StyledFundListBanner } from "./styles";
import request from "~/store/request";

const FundsList = ({ data }) => {
  console.log("data :>> ", data);
  useEffect(() => {
    request
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => console.log("res :>> ", res));
  }, []);
  return (
    <>
      <StyledFundListBanner>
        <View className="header-title">
          <Text>سرمایه‌گذار باشید</Text>
          <Text>به قله‌ی آرزوهایتان سفر کنید</Text>
        </View>
      </StyledFundListBanner>{" "}
    </>
  );
};

export default FundsList;
