import axios, { AxiosResponse } from "axios";
import { TodoType } from "../types/todo";

export function fetchTodo():Promise<AxiosResponse<Array<TodoType>>> {
  return axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos");
}
