// Imports: Dependencies
import React from "react";
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { connect } from "react-redux";

// Imports: Redux Actions
import { authActions, authEffects, authSelectors } from "~/store";

// Screen Dimensions
// const { height, width } = Dimensions.get("window");

// Screen: Counter
const Counter = ({ reduxLogin, loggedIn }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loggedInContainer}>
        <Text style={styles.loggedInText}>Logged In: </Text>
        <Text style={styles.loggedInText}>{`${loggedIn}`}</Text>
        <Button
          title="Login"
          onPress={
            loggedIn === false
              ? () => reduxLogin(true)
              : () => reduxLogin(false)
          }
          style={styles.loginButton}
        />
      </View>
      <Text style={styles.counterTitle}>Counter</Text>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loggedInContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  loginButton: {
    marginTop: 20,
    paddingTop: 20,
  },
  counterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loggedInText: {
    fontFamily: "System",
    fontSize: 17,
    fontWeight: "400",
    color: "#000",
  },
  counterTitle: {
    fontFamily: "System",
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
  },
  counterText: {
    fontFamily: "System",
    fontSize: 36,
    fontWeight: "400",
    color: "#000",
  },
  buttonText: {
    fontFamily: "System",
    fontSize: 50,
    fontWeight: "300",
    color: "#007AFF",
    marginLeft: 40,
    marginRight: 40,
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  return {
    loggedIn: authSelectors.getLogin(state),
  };
};

const mapDispatchToProps = {
  reduxLogin: (trueFalse) => authEffects.login(trueFalse),
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
