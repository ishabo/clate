import { AppNavigator } from 'routes/index';

export const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Splash'),
  null,
);

export const reducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};
