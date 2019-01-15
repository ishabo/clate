import { Store, Action } from 'redux';
import * as reducers from './reducers';
import * as actions from './actions';

export interface IExceptionPayload {
  name: string;
  message: string;
  report: boolean;
  silent?: boolean;
  response?: { [key: string]: any };
  action?: () => any;
}

export interface IException extends IExceptionPayload {
  id: number;
}

export interface IAddAction extends Action {
  payload?: IExceptionPayload;
}

export interface IRemoveAction extends Action {
  id?: number;
}

export interface IExceptionAction extends IAddAction, IRemoveAction {}

let crashReporter: (error: any) => void;
let store: Store<any>;

export const initException = (options: {
  store?: Store<any>;
  crashReporter?: any;
}) => {
  store = options.store;
  crashReporter = options.crashReporter;
};

export const create = (payload: IExceptionPayload): IExceptionPayload => {
  if (payload.report && crashReporter) {
    crashReporter(`${payload.name}: ${payload.message}`);
  }

  if (store) {
    store.dispatch(actions.add(payload));
  }

  return payload;
};

export { actions, reducers };
