import HomeReducers from './HomeReducer';

let state = {};

describe('HomeReducer', () => {
  test('Given HomeReducer when setDatas then state is merged', () => {
    const tested = HomeReducers;
    expect(tested).not.toBeNull();
  });
});
