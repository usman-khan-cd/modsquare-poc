/**
 *
 * Asynchronously loads the component for VideoBrowse
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
