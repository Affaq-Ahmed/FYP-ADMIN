import { Visibility } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "./../../assets/avatar.JPG";
import "./newUsers.scss";

export const NewUsers = ({ pendingUsers }) => {
	const [users, setUsers] = useState(pendingUsers);

	useEffect(() => {
		setUsers(pendingUsers);
	}, [pendingUsers]);

	return (
		<div className="newUser">
			<span className="title">New Joined Users</span>
			<ul className="items">
				{users.map((user) => (
					<li className="item" key={user.id}>
						<img src={user.profileImage ? user.profileImage: avatar} alt="" />
						<div className="user">
							<span className="username">
								{user.firstName + " " + user.lastName}
							</span>
							<span className="email">{user.email}</span>
						</div>
						<Link to="/users/1" className="details">
							<Visibility className="icon" />
							Details
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
