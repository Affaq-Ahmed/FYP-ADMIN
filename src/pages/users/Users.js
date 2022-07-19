import React, { useEffect, useState } from "react";
import { DataTable } from "../../components/dataTable/DataTable";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./users.scss";
import axios from "axios";

export const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				"https://tap-n-hire.herokuapp.com/api/users/"
			);
			setUsers(res.data);
      console.log(res.data)
		};
		fetchData();
	},[]);
	return (
		<div className="users">
			<Sidebar />
			<div className="usersContainer">
				<Navbar />
				<div className="top">
					<h1>Users</h1>
				</div>
				<DataTable data={users} type={"user"}/>
			</div>
		</div>
	);
};
