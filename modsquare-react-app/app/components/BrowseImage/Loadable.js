/**
 *
 * Asynchronously loads the component for BrowseImage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
