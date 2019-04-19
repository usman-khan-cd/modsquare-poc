import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the moderator state domain
 */

const selectModeratorDomain = state => state.get('moderator', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Moderator
 */

const makeSelectModerator = () =>
  createSelector(selectModeratorDomain, substate => substate.toJS());

const filterSelector = () =>
  createSelector(selectModeratorDomain, substate => substate.get('filter'));

export default makeSelectModerator;
export { selectModeratorDomain, filterSelector };
