import { TodoType } from '../../../types/todo';
import axiosCaller from './axiosCaller';

export const getTodosAPI = () => axiosCaller.get<TodoType[]>('/api/todo');
