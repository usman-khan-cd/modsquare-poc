import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the uploader state domain
 */

const selectUploaderDomain = state => state.get('uploader', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Uploader
 */

const makeSelectUploader = () =>
  createSelector(selectUploaderDomain, substate => substate.toJS());

const filterSelector = () =>
  createSelector(selectUploaderDomain, substate => substate.get('filter'));

export default makeSelectUploader;
export { selectUploaderDomain, filterSelector };
