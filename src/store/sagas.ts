import { all, call, put, ForkEffect } from 'redux-saga/effects';
import * as exceptions from 'services/exceptions';
import * as starter from 'services/starter';

export const preSagas = saga => {
  return function* (action) {
    yield put(exceptions.actions.removeAll());

    yield call(saga, action);
  };
};

export interface IAction {
  type: string;
}

const sagasEffects: ForkEffect[] = [
  ...starter.sagas.watcher(),
  // Add more sagas watchers here
];

export default function* rootSagas(): IterableIterator<any> {
  yield all(sagasEffects);
}
