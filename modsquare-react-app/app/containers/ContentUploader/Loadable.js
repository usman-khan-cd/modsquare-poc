/**
 *
 * Asynchronously loads the component for ContentUploader
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
