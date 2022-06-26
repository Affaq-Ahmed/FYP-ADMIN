export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "user",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.profileImage} alt="avatar" />
					{params.row.firstName + " " + params.row.lastName}
				</div>
			);
		},
	},
	{
		field: "email",
		headerName: "Email",
		width: 230,
	},

	{
		field: "cnic",
		headerName: "CNIC",
		width: 100,
	},
	{
		field: "createdOn",
		headerName: "Created On",
		width: 100,
		renderCell: (params) => {
			return <p>{Date(params.row.createdOn)}</p>;
		},
	},
	{
		field: "status",
		headerName: "Status",
		width: 160,
		renderCell: (params) => {
			return (
				<div
					className={`cellWithStatus ${
						params.row.profileStatus === "1"
							? "active"
							: params.row.profileStatus === "0"
							? "new"
							: params.row.profileStatus === "2"
							? "pending"
							: "lora"
					}`}
				>
					{params.row.profileStatus === "1"
						? "active"
						: params.row.profileStatus === "0"
						? "new"
						: params.row.profileStatus === "2"
						? "pending"
						: "lora"}
				</div>
			);
		},
	},
];

