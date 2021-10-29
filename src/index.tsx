import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/scss/bootstrap.scss';
import App from "./App";
import { Provider } from 'react-redux';
import {store} from './redux/store';
 
const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
