import { add, remove, removeAll } from './index';
describe('Exception actions', () => {
  it('creates add action', () => {
    const payload = {
      name: 'Excpetion name',
      message: 'Unfortunately, this is too bad!',
      report: true,
      silent: false,
    };
    expect(add(payload)).toEqual({ payload, type: 'clate/exceptions/ADD' });
  });

  it('creates remove action', () => {
    expect(remove(1)).toEqual({ id: 1, type: 'clate/exceptions/REMOVE' });
  });

  it('creates removeAll action', () => {
    expect(removeAll()).toEqual({ type: 'clate/exceptions/REMOVE_ALL' });
  });
});
