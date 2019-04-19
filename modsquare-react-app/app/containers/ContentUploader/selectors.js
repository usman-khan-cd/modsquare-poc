import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contentUploader state domain
 */

const selectContentUploaderDomain = state =>
  state.get('contentUploader', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContentUploader
 */

const makeSelectContentUploader = () =>
  createSelector(selectContentUploaderDomain, substate => substate.toJS());

export default makeSelectContentUploader;
export { selectContentUploaderDomain };
