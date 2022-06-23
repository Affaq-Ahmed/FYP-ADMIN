import React from "react";
import { DataTable } from "../../components/dataTable/DataTable";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./admins.scss";

export const Admins = () => {
	return (
		<div className="admins">
			<Sidebar />
			<div className="adminsContainer">
				<Navbar />
				<div className="top">
					<h1>Admins</h1>
				</div>
				<DataTable />
				<button className="newButton">Add Admin</button>
			</div>
		</div>
	);
};
