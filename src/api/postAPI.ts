import axios, { AxiosResponse } from "axios";
import { PostType } from "../types/post";

export const postTodo = (post:PostType):Promise<AxiosResponse> => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: post.title,
    body: post.body,
    userId: 1,
  });
}