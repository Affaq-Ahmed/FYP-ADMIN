import React from 'react'
import { DataTable } from '../../components/dataTable/DataTable';
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './categories.scss'

export const Categories = () => {
  return (
		<div className='cat'>
			<Sidebar />
			<div className="catContainer">
				<Navbar />
				<div className="top">
					<h1>Admins</h1>
				</div>
				<DataTable />
				<button className="newButton">Add Category</button>
			</div>
		</div>
	);
}
