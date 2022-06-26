import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./displayUser.scss";
import axios from "axios";

export const DisplayUser = () => {
	let { id } = useParams();
	const [user, setUser] = useState({});
	console.log(id);

	const approveUser = async () => {
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

	const rejectUser = async () => {
		try {
			const result = await axios.put(
				`https://tap-n-hire.herokuapp.com/api/admin/rejectUser`,
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

	useEffect(() => {
		const getUserData = async () => {
			try {
				const userData = await axios.get(
					`https://tap-n-hire.herokuapp.com/api/users/byId/${id}`
				);
				console.log(userData.data.user);
				setUser(userData.data.user);
			} catch (err) {
				console.log(err.message);
			}
		};
		getUserData();
	}, [id]);

	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1>Details of {user.firstName + " " + user.lastName}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								user.profileImage
									? user.profileImage
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt=""
						/>
					</div>
					<div className="right">
						<div className="details">
							<h1 className="itemTitle">User Details</h1>
							<div className="detailItem">
								<span className="itemKey">ID:</span>
								<span className="itemValue">{user.id}</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">First Name:</span>
								<span className="itemValue">{user.firstName}</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Last Name:</span>
								<span className="itemValue">{user.lastName}</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Email:</span>
								<span className="itemValue">{user.email}</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">CNIC:</span>
								<span className="itemValue">{user.cnic}</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Phone:</span>
								<span className="itemValue">{user.phone}</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Address:</span>
								<span className="itemValue">{user.address}</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Seller level:</span>
								<span className="itemValue">{user.sellerLevel}</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Date of Birth:</span>
								<span className="itemValue">{user.dob}</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Created On:</span>
								<span className="itemValue">{Date(user.createdOn)}</span>
							</div>
						</div>
						{user.profileStatus === "2" ? (
							<>
								<button className="approve" onClick={approveUser}>
									Approve
								</button>
								<button className="decline" onClick={rejectUser}>
									Decline
								</button>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
