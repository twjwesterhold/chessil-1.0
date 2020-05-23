import React from "react";
import styled from "styled-components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import "./App.css";

// component important
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Home from "./components/Home";

export const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

const App = () => {
	return (
		<Router>
			<Navbar/>
			<BodyContent>
				<Switch>
					<Route path="/board" component={Board} />
					<Route path="/" component={Home} />
				</Switch>
			</BodyContent>
		</Router>
	);
};

const BodyContent = styled.div`
  padding: 30px;
`;

export default App;
