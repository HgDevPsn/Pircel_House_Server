var express = require('express');

var errorMiddleware = function (error, req, res, next) {
  console.error(error.stack);
  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddleware;