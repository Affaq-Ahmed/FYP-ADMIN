import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./single.scss";
import avatar from "../../assets/avatar.JPG";
import { HomeTransactions } from "../../components/homeTransactions/HomeTransactions";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const Single = () => {
	let { id } = useParams();
	console.log(id);
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const getUserData = async () => {
			try {
				const userDataFetched = await axios.get(
					`https://tap-n-hire.herokuapp.com/api/users/byId/${id}`
				);
				console.log(userDataFetched.data.user);
				setUserData(userDataFetched.data.user);
			} catch (err) {
				console.log(err.message);
			}
		};
		getUserData();
	}, [id]);

	return (
		<div className="single">
			<Sidebar />
			<div className="singleContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						<Link to={`displayUser`} className="detailsBtn" user={userData}>
							Details
						</Link>
						<h1 className="title">Information</h1>
						<div className="item">
							<img
								src={userData?.profileImage ? userData?.profileImage : avatar}
								alt=""
								className="itemImg"
							/>
							<div className="details">
								<h1 className="itemTitle">
									{userData.firstName + " " + userData.lastName}
								</h1>
								<div className="detailItem">
									<span className="itemKey">Email:</span>
									<span className="itemValue">{userData.email}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">{userData.phone}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">CNIC:</span>
									<span className="itemValue">{userData.cnic}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Address:</span>
									<span className="itemValue">{userData.address}</span>
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
