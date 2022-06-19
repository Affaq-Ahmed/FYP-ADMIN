import React from "react";
import "./sidebar.scss";
import logo from "../../assets/logo.jpeg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import { ChatOutlined } from "@mui/icons-material";
import { AdminPanelSettings } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { LogoutOutlined } from "@mui/icons-material";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ReceiptIcon from '@mui/icons-material/Receipt';

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
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">FUNCTIONS</p>
					<li>
						<PersonOutlineIcon className="icon" />
						<span>Users</span>
					</li>
					<li>
						<StoreIcon className="icon" />
						<span>Services</span>
					</li>
					<li>
						<ReceiptIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<ChatOutlined className="icon" />
						<span>Chat</span>
					</li>
					<li>
						<AdminPanelSettings className="icon" />
						<span>New Admin</span>
					</li>
					<li>
						<SettingsIcon className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<ManageAccountsOutlinedIcon className="icon" />
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
