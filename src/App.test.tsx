import * as React from "react";
import * as RouterDom from "react-router-dom";
import "./styles.scss";
import {Router} from './route/router'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export default function App(): JSX.Element {
  return (
    <RouterDom.BrowserRouter>
      <Container>
        <Link to="/">Home</Link>
        <br />
        <Link to="/TodoList">TodoList</Link>
        <br />
        <Link to="/CreateTodo">CreateTodo</Link>
        <br />
        <Link to="/Photos">Photos</Link>
        <Router/>
      </Container>
    </RouterDom.BrowserRouter>
  );
}
