import React from "react";
import "./sidebar.scss";
import logo from "../../assets/logo.jpeg";
import {
	ChatOutlined,
	ShoppingCartOutlined,
	Dashboard,
	PersonOutline,
	Store,
	AdminPanelSettings,
	LogoutOutlined,
	Settings,
	ManageAccountsOutlined,
} from "@mui/icons-material";

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<img className="logo" src={logo} alt="logo" />
			</div>
			<hr />
			<div className="bottom">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<Dashboard className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">FUNCTIONS</p>
					<li>
						<PersonOutline className="icon" />
						<span>Users</span>
					</li>
					<li>
						<Store className="icon" />
						<span>Services</span>
					</li>
					<li>
						<ShoppingCartOutlined className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<ChatOutlined className="icon" />
						<span>Chat</span>
					</li>
					<li>
						<AdminPanelSettings className="icon" />
						<span>Admins</span>
					</li>
					<li>
						<Settings className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<ManageAccountsOutlined className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<LogoutOutlined className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
		</div>
	);
};
