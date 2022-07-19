import React, { useRef, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./newCategory.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NewCategory = () => {
	const navigate = useNavigate();
	const [file, setFile] = useState("");
	const nameE = useRef();
	const nameU = useRef();
	const id = useRef();
	const [percent, setPercent] = useState(0);
	const [imageURL, setImageURL] = useState("");

	const storage = getStorage();

	const handleUpload = async (result) => {
		if (!file) {
			alert("Please choose a file first!");
		}
		// let uri = file;
		// const response = await fetch(uri);
		// console.log(response);
		// const blob = await response.blob();
		// console.log(blob);

		const storageRef = ref(storage, `category/${nameE.current.value}.png`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setPercent(progress);
				console.log(`Upload is ${progress}% done`);
				switch (snapshot.state) {
					case "paused":
						console.log("Upload is paused");
						break;
					case "running":
						console.log("Upload is running");
						break;
					default:
						break;
				}
			},
			(err) => console.log(err),
			() => {
				// download url
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					console.log(url);
					setImageURL(url);
					createCategory(url);
				});
			}
		);
	};

	const createCategory = async (url) => {
		const category = {
			name: [nameE.current.value, nameU.current.value],
			id: id.current.value,
			imageURL: url,
		};
		try {
			const res = await axios.post(
				"https://tap-n-hire.herokuapp.com/api/admin/category",
				category
			);
			console.log(res);
			navigate(-1);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleUpload();
	};

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
						<form onSubmit={handleSubmit}>
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
							<button type="submit">Create</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
