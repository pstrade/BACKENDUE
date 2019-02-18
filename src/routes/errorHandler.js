// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, _req, res, _next) => {
  console.log('?');
  res.status(err.status || 500).send(err.message || 'Something went wrong');
};
