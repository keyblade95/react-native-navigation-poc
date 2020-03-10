import { Navigation } from 'react-native-navigation';
import registerScreens from './src/navigation';
import getNavigationOptions from './src/config';

import {LaunchScreenId} from './src/views/LaunchScreen';


export const startApp = (store: any, Provider: any) => {

  registerScreens(store, Provider);

  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setDefaultOptions(getNavigationOptions());

    Navigation.setRoot({
      root: {
        component: {
          name: LaunchScreenId
        }
      }
    });

  });

}
