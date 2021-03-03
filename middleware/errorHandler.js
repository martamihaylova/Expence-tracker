const errorHandler = (err, req, res, next) => {
err.message = err.message || 'Smething went wrong';
err.status = err.status || 500;
console.log(err.message);

res.status(err.status).json({messages: {error: err.message}});
};
module.exports = errorHandler;