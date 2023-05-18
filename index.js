/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import reactotron from './ReactotronConfig';
if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

global.r = reactotron;
const connectedApp = () => (
        <App />
);


AppRegistry.registerComponent(appName, () => connectedApp);
