import * as React from "react";
import * as RouterDom from "react-router-dom";
import "./styles.scss";
import { Router } from "./route/router";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function App(): JSX.Element {
  return (
    <RouterDom.BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Nav className="justify-content-center" defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/TodoList">一覧表示</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/CreateTodo">登録フォーム</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/PhotsList">写真一覧（作成中）</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/pmp/Top">PMP学習（作成中）</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Container>
        <Router />
      </Container>{" "}
    </RouterDom.BrowserRouter>
  );
}
