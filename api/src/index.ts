import fallback from '@blocklet/sdk/lib/middlewares/fallback';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv-flow';
import express from 'express';
import 'express-async-errors';
import path from 'path';

import { name, version } from '../../package.json';
import { errorHandler } from './libs/errorRequestHandler';
import logger from './libs/logger';
import routes from './routes';

dotenv.config();

export const app = express();

app.set('trust proxy', true);
app.use(cookieParser());
app.use(express.json({ limit: '1 mb' }));
app.use(express.urlencoded({ extended: true, limit: '1 mb' }));
app.use(cors());

// 解析JSON请求体
app.use(bodyParser.json());

// 解析URL-encoded请求体
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
router.use('/api', routes);
app.use(router);

const isProduction = process.env.NODE_ENV === 'production' || process.env.ABT_NODE_SERVICE_ENV === 'production';

if (isProduction) {
  const staticDir = path.resolve(process.env.BLOCKLET_APP_DIR!, 'dist');
  app.use(express.static(staticDir, { maxAge: '30d', index: false }));
  app.use(fallback('index.html', { root: staticDir }));
  app.use(errorHandler);
}

const port = parseInt(process.env.BLOCKLET_PORT!, 10);

export const server = app.listen(port, (err?: any) => {
  if (err) throw err;
  logger.info(`> ${name} v${version} ready on ${port}`);
});
