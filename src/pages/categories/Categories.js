import React, { useEffect, useState } from "react";
import { DataTable } from "../../components/dataTable/DataTable";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./categories.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categories = await axios.get(
					"https://tap-n-hire.herokuapp.com/api/category"
				);

				setCategories(categories.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCategories();
	}, []);

	return (
		<div className="cat">
			<Sidebar />
			<div className="catContainer">
				<Navbar />
				<div className="top">
					<h1>Categories</h1>
				</div>
				<DataTable type={"category"} data={categories} />
				<Link to="newCategory" className="newButton">
					Add Category
				</Link>
			</div>
		</div>
	);
};
