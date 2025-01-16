import { Request, Response, Router } from 'express';
import { body, param, validationResult } from 'express-validator';

import { fail, getBody, getParams, sucess } from '../libs/tools';
import { createUser, findUserByEmail, findUserById, updateUser } from '../service/user';
import { User } from '../types/user';

const router = Router();

const userBodyValidator = [
  body('name').isString().withMessage('name is required'),
  body('phone').isMobilePhone('any').withMessage('phone is required'),
  body('email').isEmail().withMessage('email is required'),
];

router.post('/user', userBodyValidator, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return fail(res, errors.array(), 422);
  }
  const body = getBody(req) as User;
  const user = await findUserByEmail(body.email);
  if (user) {
    return fail(res, 'user is not emty', 9001);
  }
  const result = await createUser(body);
  sucess(res, result);
});

router.get('/user/:id', async (req: Request, res: Response) => {
  const params = getParams(req);
  if (!params.id) {
    return fail(res, 'id is required', 422);
  }
  const user = await findUserById(params.id);
  if (user) {
    sucess(res, user);
  } else {
    fail(res, 'user not exsit', 9001);
  }
});
// update user
router.put(
  '/user/:id',
  [param('id').isString().withMessage('id is required'), ...userBodyValidator],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return fail(res, errors.array(), 422);
    }
    const { id } = getParams(req);
    const body = getBody(req) as User;
    const userDetail = await findUserById(id);
    if (!userDetail) {
      return fail(res, 'user not exsit', 9001);
    }
    const result = await updateUser(id, body);
    sucess(res, result);
  },
);

export default router;
