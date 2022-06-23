import { Visibility } from "@mui/icons-material";
import React from "react";
import avatar from "./../../assets/avatar.JPG";
import "./newUsers.scss";

export const NewUsers = () => {
	return (
		<div className="newUser">
			<span className="title">New Joined Users</span>
			<ul className="items">
				<li className="item">
					<img src={avatar} alt="" />
					<div className="user">
						<span className="username">John Doe</span>
						<span className="email">johndoe@gmail.com</span>
					</div>
					<button className="details">
						<Visibility className="icon" />
						Details
					</button>
				</li>
				<li className="item">
					<img src={avatar} alt="" />
					<div className="user">
						<span className="username">John Doe</span>
						<span className="email">johndoe@gmail.com</span>
					</div>
					<button className="details">
						<Visibility className="icon" />
						Details
					</button>
				</li>
				<li className="item">
					<img src={avatar} alt="" />
					<div className="user">
						<span className="username">John Doe</span>
						<span className="email">johndoe@gmail.com</span>
					</div>
					<button className="details">
						<Visibility className="icon" />
						Details
					</button>
				</li>
			</ul>
		</div>
	);
};
