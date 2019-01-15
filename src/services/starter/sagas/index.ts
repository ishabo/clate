import { takeLatest, ForkEffect } from 'redux-saga/effects';

import * as starter from '../';
import { preSagas } from 'store/sagas';

export function* onAppStart(): IterableIterator<any> {
  // Here goes all you initial fetches on app start
}

export const watcher = (): ForkEffect[] => {
  const types = starter.actions.types;
  return [takeLatest(types.ON_APP_START, preSagas(onAppStart))];
};
