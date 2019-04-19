import { fromJS } from 'immutable';
import uploaderReducer from '../reducer';

describe('uploaderReducer', () => {
  it('returns the initial state', () => {
    expect(uploaderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
