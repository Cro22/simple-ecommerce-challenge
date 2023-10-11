function respondWithError(res, statusCode, errorMessage) {
  res.status(statusCode).json({ error: errorMessage });
}

function respondWithSuccess(res, statusCode, data) {
  res.status(statusCode).json(data);
}

module.exports = {
  respondWithSuccess,
  respondWithError
};
