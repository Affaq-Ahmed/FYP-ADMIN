export const userColumns = [
	{ field: "id", headerName: "ID", width: 200 },
	{
		field: "user",
		headerName: "User",
		width: 200,
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
		width: 200,
	},

	{
		field: "cnic",
		headerName: "CNIC",
		width: 150,
	},
	{
		field: "createdOn",
		headerName: "Created On",
		width: 150,
		renderCell: (params) => {
			return <p>{Date(params.row.createdOn)}</p>;
		},
	},
	{
		field: "status",
		headerName: "Status",
		width: 100,
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

export const adminColumns = [
	{ field: "id", headerName: "ID", width: 200 },
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
		width: 200,
	},

	{
		field: "cnic",
		headerName: "CNIC",
		width: 150,
	},
	{
		field: "createdOn",
		headerName: "Created On",
		width: 150,
		renderCell: (params) => {
			return <p>{Date(params.row.createdOn)}</p>;
		},
	},
];

export const catColumns = [
	{ field: "id", headerName: "ID", width: 200 },
	{
		field: "imageUrl",
		headerName: "image",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.imageUrl} alt="avatar" />
				</div>
			);
		},
	},
	{
		field: "name[0]",
		headerName: "Name English",
		width: 230,
		renderCell: (params) => {
			return <p>{params.row.name[0]}</p>;
		},
	},
	{
		field: "name[1]",
		headerName: "Name Urdu",
		width: 230,
		renderCell: (params) => {
			return <p>{params.row.name[1]}</p>;
		},
	},
];
