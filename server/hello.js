module.exports.world = (event, context, cb) => {
  cb(null, {
    statusCode: 200,
    headers: {},
    body: "Hello world"
  });
};
