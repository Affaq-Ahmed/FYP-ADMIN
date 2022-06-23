import React, { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./newAdmin.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

export const NewAdmin = () => {
	const [file, setFile] = useState("");

	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1>Add New Admin</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt=""
						/>
					</div>
					<div className="right">
						<form>
							<div className="formInput">
								<label htmlFor="file">
									Image:
									<DriveFolderUploadOutlined className="icon" />
								</label>
								<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
									style={{ display: "none" }}
								/>
							</div>
							<div className="formInput fn">
								<label htmlFor="firstName">First Name</label>
								<input type="text" placeholder="John" />
							</div>
							<div className="formInput fn">
								<label htmlFor="lastName">Last Name</label>
								<input type="text" placeholder="Doe" />
							</div>
							<div className="formInput">
								<label htmlFor="username">Username</label>
								<input type="text" placeholder="JohnDoe" />
							</div>
							<div className="formInput">
								<label htmlFor="email">Email</label>
								<input type="email" placeholder="johndoe@gmail.com" />
							</div>
							<div className="formInput">
								<label htmlFor="CNIC">CNIC</label>
								<input type="text" placeholder="38201-1234567-3" />
							</div>
							<div className="formInput">
								<label htmlFor="phone">Phone</label>
								<input type="text" placeholder="+92 300 1234567" />
							</div>
							<div className="formInput fn">
								<label htmlFor="password">Password</label>
								<input type="password" placeholder="******" />
							</div>
							<div className="formInput fn">
								<label htmlFor="confirmpassword">ConfirmPassword</label>
								<input type="password" placeholder="******" />
							</div>
							<button>Create</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
