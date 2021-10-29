import * as React from "react";
import * as RouterDom from "react-router-dom";
import { ConfirmTodo } from "../components/page/ConfirmTodo";
import { CreateTodo } from "../components/page/CreateTodo";
import { Home } from "../components/page/Home";
import { PhotsList } from "../components/page/PhotsList";
import { IttoList } from "../components/page/pmp/IttoList";
import PmpTop from "../components/page/pmp/PmpTop";
import { ProcessList } from "../components/page/pmp/ProcessList";

import { TodoList } from "../components/page/TodoList";

export const Router = ():React.ReactElement => {
  return (
    <RouterDom.Switch>
      <RouterDom.Route exact path="/">
        <Home />
      </RouterDom.Route>
      <RouterDom.Route exact path="/TodoList">
        <TodoList />
      </RouterDom.Route>
      <RouterDom.Route exact path="/CreateTodo">
        <CreateTodo/>
      </RouterDom.Route>
      <RouterDom.Route exact path="/ConfirmTodo">
        <ConfirmTodo />
      </RouterDom.Route>
      <RouterDom.Route exact path="/PhotsList">
        <PhotsList />
      </RouterDom.Route>
      <RouterDom.Route exact path="/pmp/Top">
        <PmpTop />
      </RouterDom.Route>
      <RouterDom.Route exact path="/pmp/ProcessList">
        <ProcessList />
      </RouterDom.Route>
      <RouterDom.Route exact path="/pmp/IttoList">
        <IttoList />
      </RouterDom.Route>
    </RouterDom.Switch>
  );
};
