import { TodoType } from '../../types/todo';
import fs from 'fs';
import { Request, Response } from 'express';
import todoJSON from '../../data/todos.json';
export default async (req: Request, res: Response) => {
  try {
    res.status(200);
    res.send(todoJSON);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error);
  }
};
