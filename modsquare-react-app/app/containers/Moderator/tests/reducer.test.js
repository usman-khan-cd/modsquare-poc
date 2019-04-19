import { fromJS } from 'immutable';
import moderatorReducer from '../reducer';

describe('moderatorReducer', () => {
  it('returns the initial state', () => {
    expect(moderatorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
