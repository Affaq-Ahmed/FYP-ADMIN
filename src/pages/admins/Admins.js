import React from "react";
import { Link } from "react-router-dom";
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
				<Link to="/admin/newAdmin" className="newButton">
					Add Admin
				</Link>
			</div>
		</div>
	);
};
