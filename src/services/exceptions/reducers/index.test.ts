import { reducer } from './index';

describe('Exception actions', () => {
  const payload = {
    name: 'Excpetion name',
    message: 'Unfortunately, this is too bad!',
    report: true,
    silent: false,
  };

  it('adds exception to state', () => {
    expect(
      reducer([], {
        payload,
        type: 'clate/exceptions/ADD',
      }),
    ).toEqual([{ ...payload, id: 1 }]);
  });

  it('increments exception id on second add', () => {
    expect(
      reducer([{ ...payload, id: 1 }], {
        payload,
        type: 'clate/exceptions/ADD',
      }),
    ).toEqual([{ ...payload, id: 1 }, { ...payload, id: 2 }]);
  });

  it('removes by id', () => {
    expect(
      reducer([{ ...payload, id: 1 }, { ...payload, id: 2 }], {
        id: 1,
        type: 'clate/exceptions/REMOVE',
      }),
    ).toEqual([{ ...payload, id: 2 }]);
  });

  it('ignores a request to remove an id that does not exist', () => {
    expect(
      reducer([{ ...payload, id: 1 }], {
        id: 13,
        type: 'clate/exceptions/REMOVE',
      }),
    ).toEqual([{ ...payload, id: 1 }]);
  });

  it('removes all', () => {
    expect(
      reducer(
        [{ ...payload, id: 1 }, { ...payload, id: 2 }, { ...payload, id: 100 }],
        {
          type: 'clate/exceptions/REMOVE_ALL',
        },
      ),
    ).toEqual([]);
  });
});
