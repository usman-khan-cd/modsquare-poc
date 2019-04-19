/**
 *
 * Asynchronously loads the component for IframDialogue
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
