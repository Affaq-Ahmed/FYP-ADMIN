import React from "react";
import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource";
import { Link } from "react-router-dom";

export const DataTable = ({data}) => {
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: () => {
				return (
					<div className="cellWithAction">
						<Link to="/users/1" style={{ textDecoration: "none" }}>
							<div className="view">View</div>
						</Link>
						<div className="approve">Approve</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="dataTable">
			<DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};
