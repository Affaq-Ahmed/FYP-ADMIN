import React from "react";
import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatableSource";
import { Link } from "react-router-dom";
import axios from "axios";

export const DataTable = ({ data }) => {
	const approveUser = async (id) => {
		try {
			const result = await axios.put(
				`https://tap-n-hire.herokuapp.com/api/admin/approveUser`,
				{
					uid: id,
				}
			);
			console.log(result);
			window.location.reload();
		} catch (error) {
			console.log(error.message);
		}
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellWithAction">
						<Link to={`${params.row.id}`} style={{ textDecoration: "none" }}>
							<div className="view">View</div>
						</Link>
						{params.row.profileStatus === "2" ? (
							<div className="approve" onClick={approveUser(params.row.id)}>
								Approve
							</div>
						) : null}
					</div>
				);
			},
		},
	];

	return (
		<div className="dataTable">
			<DataGrid
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};
