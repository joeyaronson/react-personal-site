import React, { Component } from "react";
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const StyledSideBar = styled.div`
	padding:20px;
`;
export default class SideBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<StyledSideBar>
				<Typography><a>Home</a></Typography>
				<Typography><a>Projects</a></Typography>
				<Typography><a>Home</a></Typography>
			</StyledSideBar>
		);
	}
}
