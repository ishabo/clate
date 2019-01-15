import React from 'react';
import {
  NavigationState,
  NavigationDispatch,
  NavigationActions,
} from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import { AppNavigator } from 'routes';
import { BackHandler } from 'react-native';

export interface IProps {
  dispatch: NavigationDispatch;
  nav: NavigationState;
}

export default class Navigation extends React.Component<IProps> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    const { dispatch, nav } = this.props;

    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    const { nav, dispatch } = this.props;
    const ReduxAppNavigator = reduxifyNavigator(AppNavigator, 'root');

    return <ReduxAppNavigator state={nav} dispatch={dispatch} />;
  }
}
