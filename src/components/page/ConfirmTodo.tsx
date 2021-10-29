import * as React from "react";
import { Form } from "react-bootstrap";
import { useAppSelector } from '../../redux/hooks';
import {selectTodo} from "../../redux/features/postSlice"

export const ConfirmTodo: React.FC = () => {
  const todo = useAppSelector(selectTodo);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Text className="text-muted">
          {todo?.title}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBody">
        <Form.Label>Body</Form.Label>
        <Form.Text className="text-muted">
        {todo?.body}
        </Form.Text>
      </Form.Group>
    </Form>
  );
};
