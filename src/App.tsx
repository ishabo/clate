import * as React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './components';
import { initException } from 'services/exceptions';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Store from 'store';

const reduxStore = new Store();
const store = reduxStore.getStore();
const persistor = reduxStore.persistStore();

initException({ store });

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Navigation />
    </PersistGate>
  </Provider>
);
