import {AppRegistry} from 'react-native';
import { List, Login, Signup, Create, Reminder} from './src/screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);

import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('Reminder', () => Reminder);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('List', () => List);
Navigation.registerComponent('Signup', () => Signup);
Navigation.registerComponent('Create', () => Create);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});
Navigation.events().registerAppLaunchedListener(async () => {
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
