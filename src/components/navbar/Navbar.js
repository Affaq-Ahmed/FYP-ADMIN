import {
	ChatBubbleOutline,
	FullscreenExitOutlined,
	LanguageOutlined,
	ListOutlined,
	SearchOutlined,
} from "@mui/icons-material";
import "./navbar.scss";
import avatar from "./../../assets/avatar.JPG";
import React from "react";

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchOutlined />
				</div>
				<div className="items">
					<div className="item">
						<LanguageOutlined />
						English
					</div>
					<div className="item">
						<FullscreenExitOutlined />
					</div>
					<div className="item">
						<ChatBubbleOutline />
					</div>
					<div className="item">
						<ListOutlined />
					</div>
					<div className="item">
						<img className="avatar" src={avatar} alt="avatar" />
					</div>
				</div>
			</div>
		</div>
	);
};
