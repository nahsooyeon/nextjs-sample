import express from 'express';
import getTodo from '../apis/todo';
const router = express.Router();

router.get('/', getTodo);

export default router;
