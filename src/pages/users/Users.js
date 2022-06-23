import React from "react";
import { DataTable } from "../../components/dataTable/DataTable";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./users.scss";

export const Users = () => {
	return (
		<div className="users">
			<Sidebar />
			<div className="usersContainer">
				<Navbar />
				<div className="top">
					<h1>Users</h1>
				</div>
				<DataTable />
			</div>
		</div>
	);
};
