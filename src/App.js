import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import { fenToObject } from "./utils.js";

// component important
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Home from "./components/Home";

const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
const EMPTY_BOARD = "8/8/8/8/8/8/8/8";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <BodyContent>
        <Switch>
          <Route path="/board">
            <Board fen={START_FEN}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BodyContent>
    </Router>
  );
};

const BodyContent = styled.div`
  padding: 30px;
`;

export default App;
