const success = (code, message, data, meta) => {
  return data instanceof Array
    ? {
        code: code || null,
        message: message || null,
        data: data || null,
        meta: meta || null,
      }
    : {
        code: code || null,
        message: message || null,
        data: data || null,
      };
};

const error = (code, message) => {
  return {
    code: code || null,
    message: message || null,
  };
};

module.exports = {
  success,
  error,
};
