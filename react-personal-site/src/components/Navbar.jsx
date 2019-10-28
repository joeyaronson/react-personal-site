import React, { Component } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../assets/icon-05.png";
import SideBar from "./SideBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
const StyledNavbar = styled(AppBar)`
	background-color: #0088ee;
	width: 100%;
	display: flex;
	align-items: left;
	justify-content: flex-start;
	font-size: 20px;
	color: white;
	overflow: visible;
	padding-left: 10px;
`;

const StyledButton = styled(Button)`
	&& {
		text-transform: "none" !important;
	}
	&:hover {
		background-color: #ff00ff;
	}
`;
const RightSide = styled.div`
	width: 73%;
	display: flex;
	align-items: left;
	justify-content: flex-end;
`;

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideBarOpen: false
		};
	}

	// toggleSideBar = () => {
	// 	this.setState({
	// 		sideBarOpen: !this.props.sideBarOpen
	// 	});
	// };
	toggleDrawer = open => event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		this.setState({
			sideBarOpen: open
		});
	};
	render() {
		return (
			<>
				<StyledNavbar position="static">
					<Toolbar disableGutters={true}>
						<StyledButton edge="start" color="inherit" aria-label="menu">
							<img src={logo} alt="icon" height="50"></img>
							<Typography padding="10px" variant="h6">
								&ensp;Joseph Aronson
							</Typography>
						</StyledButton>
						<RightSide>
							<IconButton color="inherit" onClick={this.toggleDrawer(true)}>
								<MenuIcon />
							</IconButton>
						</RightSide>
					</Toolbar>
				</StyledNavbar>
				<Drawer
					anchor="right"
					open={this.state.sideBarOpen}
					onClose={this.toggleDrawer(false)}
				>
					<SideBar />
				</Drawer>
			</>
		);
	}
}
