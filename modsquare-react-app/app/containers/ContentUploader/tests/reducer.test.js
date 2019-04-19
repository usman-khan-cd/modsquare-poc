import { fromJS } from 'immutable';
import contentUploaderReducer from '../reducer';

describe('contentUploaderReducer', () => {
  it('returns the initial state', () => {
    expect(contentUploaderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
