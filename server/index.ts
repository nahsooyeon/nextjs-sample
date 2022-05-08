import express, { Request, Response } from 'express';
import next from 'next';
import cors, { CorsOptions } from 'cors';
import config from 'config';
import apiRouter from './routes/apiRouter';

const dev = process.env.NODE_ENV !== 'production';

const hostname = 'localhost';
const port = 3000;
const app = next({ dev, hostname, port });

(async () => {
  const handle = app.getRequestHandler();
  await app.prepare();
  const server = express();
  server.use('/api', apiRouter);

  server.use(cors(config.get<CorsOptions>('CORS')));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(
    config.get<number>('SERVER.PORT'),
    config.get<string>('SERVER.HOST'),
  );
  console.log(
    `서버 켜짐: http://localhost:${config.get<number>('SERVER.PORT')}`,
  );
})();
