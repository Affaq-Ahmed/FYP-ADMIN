import React, { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./newCategory.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

export const NewCategory = () => {
	const [file, setFile] = useState("");

	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1>Add New Category</h1>
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
								<label htmlFor="firstName">Name(English)</label>
								<input type="text" placeholder="Plumbing" />
							</div>
							<div className="formInput fn">
								<label htmlFor="firstName">Name(Urdu)</label>
								<input type="text" placeholder="پلمبنگ" />
							</div>
							<div className="formInput">
								<label htmlFor="lastName">ID</label>
								<input type="text" placeholder="11" />
							</div>
							<button>Create</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
