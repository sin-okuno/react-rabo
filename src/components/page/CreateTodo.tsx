import * as React from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from '../../redux/hooks';
import {setTodo} from "../../redux/features/postSlice"
import { PostType } from "../../types/post";
import { useHistory,withRouter  } from "react-router-dom";

export const CreateTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputTitle, setInputTitle] = React.useState<string>('');
  const [inputBody, setInputBody] = React.useState<string>('');
  const history = useHistory();
  const handleClick = ():void => {
    const inputType:PostType = {id:0,title:inputTitle,body:inputBody}
    dispatch(setTodo(inputType));
    history.push('/ConfirmTodo')
    console.log(history);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" 
        Text ={inputTitle}
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setInputTitle(e.target.value)} />
        <Form.Text className="text-muted">
          タイトルを入力してください
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBody">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={3} 
        Text ={inputBody}
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setInputBody(e.target.value)} />
        <Form.Text className="text-muted">
          内容を入力する。
        </Form.Text>
      </Form.Group>

      <Button variant="primary" onClick={handleClick}>
        確認
      </Button>

    </Form>
  );
};
export default withRouter(CreateTodo)