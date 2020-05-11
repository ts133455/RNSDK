/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {TestNavigator} from 'testapp/src/app/navigator/TestNavigator';

export const SdkButton = TestNavigator;
AppRegistry.registerComponent(appName, () => App);
