import {
	KeyboardArrowUp,
	PersonOutline,
	ShoppingCartOutlined,
	Store,
} from "@mui/icons-material";
import React from "react";
import "./widgets.scss";

export const Widgets = ({ type }) => {
	let data;

	switch (type) {
		case "users":
			data = {
				title: "Users",
				isMoney: false,
				link: "See all users",
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
				link: "See all orders",
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
				link: "See all services",
				icon: <Store className="icon" style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)" }} />,
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">1000</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUp />
					20%
				</div>
				{data.icon}
			</div>
		</div>
	);
};
