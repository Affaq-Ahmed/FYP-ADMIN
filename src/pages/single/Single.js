import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./single.scss";
import avatar from "../../assets/avatar.JPG";
import { HomeTransactions } from "../../components/homeTransactions/HomeTransactions";

export const Single = () => {
	return (
		<div className="single">
			<Sidebar />
			<div className="singleContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						<button className="detailsBtn">Details</button>
						<h1 className="title">Information</h1>
						<div className="item">
							<img src={avatar} alt="" className="itemImg" />
							<div className="details">
								<h1 className="itemTitle">Affaq Ahmed</h1>
								<div className="detailItem">
									<span className="itemKey">Email:</span>
									<span className="itemValue">affaqahmed165@gmail.com</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">+92 301 1234567</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">CNIC:</span>
									<span className="itemValue">38201123456789</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Address:</span>
									<span className="itemValue">Lahore, PK</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right"></div>
				</div>
				<div className="bottom">
					<HomeTransactions />
				</div>
			</div>
		</div>
	);
};
