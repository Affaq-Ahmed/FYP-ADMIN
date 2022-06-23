import React from "react";
import "./homeTransactions.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const HomeTransactions = () => {
	const rows = [
		{
			id: 1143155,
			product: "Acer Nitro 5",
			img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "John Smith",
			date: "1 March",
			amount: 785,
			method: "Cash on Delivery",
		},
		{
			id: 2235235,
			product: "Playstation 5",
			img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
			customer: "Michael Doe",
			date: "1 March",
			amount: 900,
			method: "Online Payment",
		},
		{
			id: 2342353,
			product: "Redragon S101",
			img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "John Smith",
			date: "1 March",
			amount: 35,
			method: "Cash on Delivery",
		},
		{
			id: 2357741,
			product: "Razer Blade 15",
			img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "Jane Smith",
			date: "1 March",
			amount: 920,
			method: "Online",
		},
		{
			id: 2342355,
			product: "ASUS ROG Strix",
			img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "Harold Carol",
			date: "1 March",
			amount: 2000,
			method: "Online",
		},
	];
	return (
		<div className="homeTransactions">
			<h3 className="title">Latest Transactions</h3>
			<TableContainer component={Paper} className="table">
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className="cell">ID</TableCell>
							<TableCell className="cell">Username</TableCell>
							<TableCell className="cell">Service</TableCell>
							<TableCell className="cell">Date</TableCell>
							<TableCell className="cell">Amount</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.id}>
								<TableCell className="cell">{row.id}</TableCell>
								<TableCell className="cell">
									<div className="cellWrapper">
										<img src={row.img} alt="user" />
										<span>{row.customer}</span>
									</div>
								</TableCell>
								<TableCell className="cell">{row.product}</TableCell>
								<TableCell className="cell">{row.date}</TableCell>
								<TableCell className="cell">{row.amount}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
