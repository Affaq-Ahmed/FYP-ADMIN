import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "../../components/dataTable/DataTable";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./admins.scss";
import axios from "axios";

export const Admins = () => {
	const [admins, setAdmins] = useState([]);

	useEffect(() => {
		const fetchAdmins = async () => {
			try {
				const res = await axios.get(
					"https://tap-n-hire.herokuapp.com/api/admin/"
				);
				setAdmins(res.data);
			} catch (err) {
				console.log(err.message);
			}
		};
    fetchAdmins();
	});
	return (
		<div className="admins">
			<Sidebar />
			<div className="adminsContainer">
				<Navbar />
				<div className="top">
					<h1>Admins</h1>
				</div>
				<DataTable data={admins} />
				<Link to="/admin/newAdmin" className="newButton">
					Add Admin
				</Link>
			</div>
		</div>
	);
};
