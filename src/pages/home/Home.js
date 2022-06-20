import React from "react";
import "./home.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Widgets } from "../../components/widgets/Widgets";

export const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widgets type="users" />
					<Widgets type="orders"/>
					<Widgets type="services"/>
					{/* <Widgets /> */}
				</div>
			</div>
		</div>
	);
};
