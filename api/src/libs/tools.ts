import { Request, Response } from 'express';

function removeEmptyValues(obj: object) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}

export function sucess(response: Response, data: any) {
  response.json({
    success: true,
    code: 200,
    message: 'success',
    data,
  });
}

export function fail(response: Response, data: object | string, code: number = 9001) {
  response.json({
    success: false,
    code,
    message: 'fail',
    data,
  });
}

export function getBody(request: Request) {
  const body = request.body;
  if (!body) return {};
  return removeEmptyValues(body);
}
export function getQuery(request: Request) {
  const query = request.query;
  if (!query) return {};
  return removeEmptyValues(query);
}

export function getParams(request: Request) {
  const params = request.params;
  if (!params) return {};
  return removeEmptyValues(params);
}
