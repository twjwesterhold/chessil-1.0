import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";
import { Redirect } from "react-router";
import Board from "../Board";
import {
	fenToObject,
	isValidFen
} from "../../utils.js";
import { Colors } from "../../styles/colors.js";

class Fenbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
		if (!isValidFen(this.state.value)) {
			alert(this.state.value + " is not a valid FEN.");
			event.preventDefault();
		} else {
			this.setState({toBoard: true});
		}
	}

	render() {
		if (this.state.toBoard === true) {
			return (
				<Redirect 
					to={{
						pathname: "/board",
						state: { fen: this.state.value }
					}}
				/>
			);
		}

		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Enter custom FEN:
					<FenInputBar
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<LoadButton type="submit" value="Load" />
			</form>
		);
	}
};

const FenInputBar = styled.input`
	padding: 5px;
	margin-left: 15px;
	margin-right: 15px;
	width: 350px;
	font-size: 14px;
`;

const LoadButton = styled.input`
	background-image: linear-gradient(to bottom right, ${Colors.PattensBlue}, ${Colors.LilyWhite});
	border-radius: 2px 7px;
	font-size: 14px;
	border: 1px solid timberwolf;
	outline: none;
	&.hover {
		background-image: linear-gradient(to bottom right, white, black);
	}
`;

export default Fenbar;