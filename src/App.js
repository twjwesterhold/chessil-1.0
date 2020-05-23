import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

// component important
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Home from "./components/Home";

const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
const EMPTY_BOARD = "8/8/8/8/8/8/8/8";

const App = () => {
  const defBoard = fenToObject(START_FEN);
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

const isValidFen = (fen) => {
  // fen must be a string
  if (typeof fen !== 'string') {
    return false;
  }

  // cut off move and castling data
  var fenTest = fen.split(' ', 1)[0];
  // expand empty squares
  fenTest = expandFenEmptySquares(fenTest);

  // separate into chunks
  var ranks = fenTest.split('/');

  // check that each row has data for 8 squares
  if (ranks.length !== 8) {
    return false;
  }

  // check each row contains only valid FEN characters
  for (var i = 0; i < 8; i++) {
    if (ranks[i].length !== 8 ||
        ranks[i].search(/[^kqrnbp1]/i) !== -1) {
      return false;
    }
  }

  // will be valid here, ignoring move and castling data at this point in development
  return true;
};

const expandFenEmptySquares = (fen) => {
  // replace multiple empty squares with an equivalent number of ones
  return fen.replace(/2/g, '11')
    .replace(/3/g, '111')
    .replace(/4/g, '1111')
    .replace(/5/g, '11111')
    .replace(/6/g, '111111')
    .replace(/7/g, '1111111')
    .replace(/8/g, '11111111')
};

const fenToObject = (fen) => {
  if (!isValidFen(fen)) {
    return false;
  }

  var fenTemp = fen.split(' ', 1)[0];
  fenTemp = expandFenEmptySquares(fenTemp);

  var rows = fenTemp.split('/');
  var position = [];

  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      position.push({rank: "", file: "", piece: "", squareColor: "",});
      var curr = j + 8*i;
      position[curr].rank = i;
      position[curr].file = j;
      position[curr].piece = (rows[i].charAt(j) !== '1') ? rows[i].charAt(j) : ' ';
      position[curr].squareColor = ((i+j)%2 === 0) ? "whiteS" : "blackS";
    }
  }

  return position;
};

export default App;
