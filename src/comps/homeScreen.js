import React from "react";
import { Button, ThemeProvider, Text } from "react-native-elements";
import MyHeader from "./header.js";
import MessagesScreen from "./messScreen.js";
import MapScreen from "./map.js";
import LoginForm from "./login.js";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const theme = {
  Button: {
    raised: true
  }
};

const testQuery = gql`
  {
    users {
      id
      username
    }
  }
`;

const testingFunc = () => {
  const { loading, error, data } = useQuery(testQuery);
  if (loading) console.log("Loading");
  if (error) console.log("Error");

  console.log(data);
};

const HomeScreen = props => {
  testingFunc();
  return (
    <ThemeProvider theme={theme}>
      <MyHeader
        phrase="This is a test"
        pageChange={props.navigation.navigate}
      />
      <Text>The Tracking App</Text>
    </ThemeProvider>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Messages: MessagesScreen,
    Map: MapScreen,
    Login: LoginForm
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
