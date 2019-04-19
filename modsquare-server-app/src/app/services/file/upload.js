const upload = async file => {
  try {
    return `/storage/${file.filename}`;
  } catch (error) {
    console.log(`Upload.JS - Ann Error Occurred: ${error}`);
  }
};

module.exports = { upload };
