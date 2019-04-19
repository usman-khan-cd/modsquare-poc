/**
 *
 * Asynchronously loads the component for Uploader
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
