import * as React from "react";
import "./todoList.scss";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import {
  getTodoAsync,
  selectTodo,
} from '../../redux/features/todoSlice';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export const TodoList: React.FC = () => {
  const todos = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();  
  return (
    <Container>
      <br/>
      <Button variant="primary" onClick={() => dispatch(getTodoAsync())}>データ取得</Button>
      <br/>
      <Table className="todoList">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {/* todoListの後?をつけることで、nullがきても大丈夫 */}
          {todos?.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <input type="checkbox" checked={todo.completed} readOnly />{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
