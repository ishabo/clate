import { combineReducers } from 'redux';
import * as navigation from 'services/nav/reducers';
import * as exceptions from 'services/exceptions';

import { NavigationState } from 'react-navigation';

export interface IStoreState {
  nav: NavigationState;
  exceptions: exceptions.IException[];
}

export const initialState: IStoreState = {
  nav: navigation.initialState,
  exceptions: exceptions.reducers.initialState,
};

export default combineReducers({
  nav: navigation.reducer,
  exceptions: exceptions.reducers.reducer,
});
