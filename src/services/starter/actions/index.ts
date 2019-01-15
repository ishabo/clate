const namespace = 'clate/starter';

export const types = {
  ON_APP_START: `${namespace}/ON_APP_START`,
};

export const onAppStart = () => ({
  type: types.ON_APP_START,
});
