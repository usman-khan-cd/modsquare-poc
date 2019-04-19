import axios from 'axios';

const postUtil = (url, data) => axios.post(url, data);

const putUtil = (url, data) =>
  axios({
    method: 'put',
    url,
    data,
  });

const patchUtil = (url, data) =>
  axios({
    method: 'patch',
    url,
    data,
  });

const getUtil = (url, data = null) => axios.get(url, { params: data });

const deleteUtil = (url, data = null) => axios.delete(url, { params: data });

export { postUtil, getUtil, putUtil, patchUtil, deleteUtil };
