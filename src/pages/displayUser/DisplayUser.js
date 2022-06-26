import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./displayUser.scss";

export const DisplayUser = () => {
	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1>Details of John Doe</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							alt=""
						/>
					</div>
					<div className="right">
						<div className="details">
							<h1 className="itemTitle">User Details</h1>
							<div className="detailItem">
								<span className="itemKey">ID:</span>
								<span className="itemValue">ahldkf1289173hjkn</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">First Name:</span>
								<span className="itemValue">Affaq</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Last Name:</span>
								<span className="itemValue">Ahmed</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Email:</span>
								<span className="itemValue">affaqahmed165@gmail.com</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">CNIC:</span>
								<span className="itemValue">38201123456789</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Phone:</span>
								<span className="itemValue">+92 301 1234567</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Address:</span>
								<span className="itemValue">Lahore, PK</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">First Name:</span>
								<span className="itemValue">Affaq</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Seller level:</span>
								<span className="itemValue">Beginner</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Date of Birth:</span>
								<span className="itemValue">06/11/1999</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Created On:</span>
								<span className="itemValue">06/06/2022</span>
							</div>
						</div>
						<button className="approve">Approve</button>
						<button className="decline">Decline</button>
					</div>
				</div>
			</div>
		</div>
	);
};
