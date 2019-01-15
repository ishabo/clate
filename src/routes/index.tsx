import { Splash } from 'screens';

import { createStackNavigator } from 'react-navigation';

export const AppNavigator = createStackNavigator({
  Splash: { screen: Splash },
});
