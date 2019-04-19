const editItem = (params, body) => {
  return {
    item_id: params.item_id || null,
    status: body.status || null,
  };
};

const postImageItem = body => {
  return {
    image: body.image || null,
    status: 'pending' || null,
    type: 'image' || null,
    user: '5cac2bffa423030cd4d7ec9a' || null,
  };
};

const postVideoItem = body => {
  return {
    video: body.video_item || null,
    status: 'pending' || null,
    type: 'video' || null,
    user: '5cac2bffa423030cd4d7ec9a' || null,
  };
};

const postTextItem = body => {
  return {
    text: body.text_item || null,
    status: 'pending' || null,
    type: 'content' || null,
    user: '5cac2bffa423030cd4d7ec9a' || null,
  };
};

const postIFrameItem = body => {
  return {
    iframe: body.iframe_item || null,
    status: 'pending' || null,
    type: 'iframe' || null,
    user: '5cac2bffa423030cd4d7ec9a' || null,
  };
};

module.exports = {
  editItem,
  postImageItem,
  postVideoItem,
  postTextItem,
  postIFrameItem,
};
