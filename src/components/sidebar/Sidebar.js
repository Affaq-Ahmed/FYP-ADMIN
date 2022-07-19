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
	CategoryOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: "nones" }}>
					<img className="logo" src={logo} alt="logo" />
				</Link>
			</div>
			<hr />
			<div className="bottom">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<Link to="/" style={{ textDecoration: "none" }}>
							<Dashboard className="icon" />
							<span>Dashboard</span>
						</Link>
					</li>
					<p className="title">FUNCTIONS</p>
					<li>
						<Link to="/users" style={{ textDecoration: "none" }}>
							<PersonOutline className="icon" />
							<span>Users</span>
						</Link>
					</li>
					{/* <li>
						<Link to="/services" style={{ textDecoration: "none" }}>
							<Store className="icon" />
							<span>Services</span>
						</Link>
					</li> */}
					<li>
						<Link to="/category" style={{ textDecoration: "none" }}>
							<CategoryOutlined className="icon" />
							<span>Categories</span>
						</Link>
					</li>
					<li>
						<Link to="/orders" style={{ textDecoration: "none" }}>
							<ShoppingCartOutlined className="icon" />
							<span>Orders</span>
						</Link>
					</li>
					<li>
						<Link to="/chat" style={{ textDecoration: "none" }}>
							<ChatOutlined className="icon" />
							<span>Chat</span>
						</Link>
					</li>
					<li>
						<Link to="/admin" style={{ textDecoration: "none" }}>
							<AdminPanelSettings className="icon" />
							<span>Admins</span>
						</Link>
					</li>
					<li>
						<Link to="/settings" style={{ textDecoration: "none" }}>
							<Settings className="icon" />
							<span>Settings</span>
						</Link>
					</li>
					<p className="title">USER</p>
					<li>
						<Link to="/profile" style={{ textDecoration: "none" }}>
							<ManageAccountsOutlined className="icon" />
							<span>Profile</span>
						</Link>
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
