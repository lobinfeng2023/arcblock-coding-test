import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err.status === 404) {
    res.status(404).send({ error: 'Not Found' });
  } else {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
