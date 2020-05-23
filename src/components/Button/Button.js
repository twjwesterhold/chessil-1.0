import styled from "styled-components";
import {Colors} from "../../styles/colors";

const Button = styled.button`
	background-image: linear-gradient(to bottom right, ${Colors.PattensBlue}, ${Colors.LilyWhite});
	margin-top: 20px;
	margin-right: 15px;
	border-radius: 2px 7px;
	font-size: 14px;
	border: 1px solid timberwolf;
	outline: none;
	cursor: pointer;
`;

export default Button;
