const moment = require('moment');

const map = array => {
  const arrayList = array.map(element => mapItem(element));

  return arrayList;
};

const mapItem = data => {
  return {
    _id: data._id || null,
    refId: data._id,
    create_date: moment(data.create_date).fromNow() || null,
    image: data.image || null,
    video: data.video || null,
    text: data.text || null,
    iframe: data.iframe || null,
    status: data.status || null,
    type: data.type || null,
    user: {
      _id: data.user._id || null,
      first_name: data.user.first_name || null,
      last_name: data.user.last_name || null,
      name: `${data.user.first_name} ${data.user.last_name}`
    },
  };
};

module.exports = { map, mapItem };
