import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HandleCustomer from './pages/CustomersPages/HandleCustomer';

import colors from './styles/colors';
import strings from './assets/strings';

const Stack = createStackNavigator();

export default function createRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: `${colors.secondaryVariant}`,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerStyle: {
          height: 70,
          elevation: 0,
          backgroundColor: `${colors.white}`,
        },
      }}
    >
      <Stack.Screen
        name="HandleCustomer"
        component={HandleCustomer}
        options={{
          title: strings.header_customer_edit,
          unmountOnBlur: true,
          // eslint-disable-next-line react/prop-types
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={() => {}}>
              <Icon name="keyboard-backspace" size={30} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
