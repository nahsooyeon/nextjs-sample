import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import todoRouter from './todoRouter';

const router = express.Router();

// middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());

// routes
router.use('/todo', todoRouter);

export default router;
