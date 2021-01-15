/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import Route from './pages/home';
import Route from './src/router/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Route);
