import React from "react";
import styled from "styled-components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

// component important
import Navbar from "./components/Navbar";
import BoardEditor from "./components/BoardEditor";
import Home from "./components/Home";

const App = () => {
	return (
		<Router>
			<Navbar/>
			<BodyContent>
				<Switch>
					<Route path="/boardeditor" component={BoardEditor} />
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
