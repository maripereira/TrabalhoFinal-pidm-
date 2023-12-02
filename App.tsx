import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Login, List, Create} from './src/screens';

export default function App() {
  return <Login />;
}
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('List', () => List);
Navigation.registerComponent('Create', () => Create);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
            },
          },
        ],
      },
    },
  });
});
