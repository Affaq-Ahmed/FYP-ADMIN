import {
	KeyboardArrowUp,
	PersonOutline,
	ShoppingCartOutlined,
	Store,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./widgets.scss";
import { Link } from "react-router-dom";

export const Widgets = ({ type, newCount, count }) => {
	let data;
	const [counts, setCounts] = useState(count);
	const [newCounts, setNewCounts] = useState(newCount);

	useEffect(() => {
		setCounts(count);
		setNewCounts(newCount);
	}, [count, newCount]);

	switch (type) {
		case "users":
			data = {
				title: "Users",
				isMoney: false,
				link: (
					<Link to="/users" style={{ textDecoration: "none", color: "gray" }}>
						See all users
					</Link>
				),
				icon: (
					<PersonOutline
						className="icon"
						style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
					/>
				),
			};
			break;
		case "orders":
			data = {
				title: "Orders",
				isMoney: false,
				link: (
					<Link to="/orders" style={{ textDecoration: "none", color: "gray" }}>
						See all orders
					</Link>
				),
				icon: (
					<ShoppingCartOutlined
						className="icon"
						style={{
							color: "goldenrod",
							backgroundColor: "rgba(218, 165,32, 0.2)",
						}}
					/>
				),
			};
			break;
		case "services":
			data = {
				title: "Services",
				isMoney: false,
				link: (
					<Link
						to="/services"
						style={{ textDecoration: "none", color: "gray" }}
					>
						See all services
					</Link>
				),
				icon: (
					<Store
						className="icon"
						style={{
							color: "purple",
							backgroundColor: "rgba(128, 0, 128, 0.2)",
						}}
					/>
				),
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">{counts}</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUp />
					{newCounts}
				</div>
				{data.icon}
			</div>
		</div>
	);
};
