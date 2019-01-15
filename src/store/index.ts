import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import {
  compose,
  createStore,
  applyMiddleware,
  Store as ReduxStore,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { Platform } from 'react-native';
import storage from 'redux-persist/es/storage';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import rootSagas from './sagas';
import rootReducer, { IStoreState } from './reducers';

const config = {
  storage,
  key: 'root',
  // stateReconciler: true,
  blacklist: ['nav', 'exceptions'],
};

interface IDevTools {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: () => void;
}

const hasDevTools = (item: IDevTools | Window): item is IDevTools => {
  return (<IDevTools>item).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined;
};

/**
 * Redux/Sagas Store configuration
 *
 * @class Store
 */

export default class Store {
  public static instance: Store;
  private store: ReduxStore;
  private sagaMiddleware = createSagaMiddleware();

  constructor() {
    const reducer = persistReducer(config, rootReducer);
    this.store = createStore(reducer, this.getEnhancers());

    if (!Store.instance) {
      Store.instance = this;
    }
  }

  public getStore() {
    this.sagaMiddleware.run(rootSagas);
    return this.store;
  }

  public persistStore() {
    return persistStore(this.store);
  }

  private getEnhancers() {
    const reactNavMiddleWare = createReactNavigationReduxMiddleware(
      'root',
      (state: IStoreState) => state.nav,
    );

    const middlewares = applyMiddleware(
      this.sagaMiddleware,
      reduxImmutableStateInvariant(),
      reactNavMiddleWare,
    );

    let composeEnhancers = compose;

    if (__DEV__) {
      composeEnhancers =
        (hasDevTools(window) && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        composeWithDevTools({
          name: Platform.OS,
          ...require('../../package.json').remotedev,
        });
    }

    return composeEnhancers(middlewares);
  }
}
