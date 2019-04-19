export const apiBasePath = process.env.API_BASE_URL;

export const getContentApi = `${apiBasePath}/uploader/v1/items`;
export const uploadImageApi = `${apiBasePath}/uploader/v1/items/image_item`;
export const uploadContentApi = `${apiBasePath}/uploader/v1/items/text_item`;
export const uploadVideoApi = `${apiBasePath}/uploader/v1/items/video_item`;
export const uploadIframeApi = `${apiBasePath}/uploader/v1/items/iframe_item`;

export const getContentModeratorApi = `${apiBasePath}/moderator/v1/items`;
export const updateContentModeratorApi = `${apiBasePath}/moderator/v1/items/verify/`;
export const ContentModeratorApi = `${apiBasePath}/moderator/v1/items/`;
