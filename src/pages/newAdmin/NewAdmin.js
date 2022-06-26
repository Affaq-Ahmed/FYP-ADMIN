import React, { useState, useRef } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./newAdmin.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { auth, createUserWithEmailAndPassword } from "../../firebase";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const NewAdmin = () => {
	const [file, setFile] = useState("");
	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const username = useRef();
	const password = useRef();
	const confirmPassword = useRef();
	const phone = useRef();
	const address = useRef();
	const dateOfBirth = useRef();
	const CNIC = useRef();
	const [percent, setPercent] = useState(0);
	const [imageURL, setImageURL] = useState("");

	const storage = getStorage();
	const navigate = useNavigate();

	const signUp = async (email, password) => {
		try {
			const result = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(result);
			return result;
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpload = () => {
		if (!file) {
			alert("Please choose a file first!");
		}

		const storageRef = ref(storage, `userDps/${email.current.value}.jpg`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const percent = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);

				// update progress
				setPercent(percent);
        console.log(percent);
			},
			(err) => console.log(err),
			() => {
				// download url
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					console.log(url);
					setImageURL(url);
				});
			}
		);
	};

	const createAdmin = async () => {
		const admin = {
			firstName: firstName.current.value,
			lastName: lastName.current.value,
			email: email.current.value,
			username: username.current.value,
			password: password.current.value,
			confirmPassword: confirmPassword.current.value,
			phone: phone.current.value,
			address: address.current.value,
			dateOfBirth: dateOfBirth.current.value,
			CNIC: CNIC.current.value,
			imageURL: imageURL,
		};
		console.log(admin);
		try {
			const result = await axios.post(
				"https://tap-n-hire.herokuapp.com/api/admin/",
				admin
			);
			console.log(result);
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = signUp(email.current.value, password.current.value);
		console.log(result);
		handleUpload();
		createAdmin();
		navigate(-1);
	};

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
								<label htmlFor="firstName">First Name</label>
								<input type="text" placeholder="John" ref={firstName} />
							</div>
							<div className="formInput fn">
								<label htmlFor="lastName">Last Name</label>
								<input type="text" placeholder="Doe" ref={lastName} />
							</div>
							<div className="formInput">
								<label htmlFor="username">Username</label>
								<input type="text" placeholder="JohnDoe" ref={username} />
							</div>
							<div className="formInput">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									placeholder="johndoe@gmail.com"
									ref={email}
								/>
							</div>
							<div className="formInput">
								<label htmlFor="CNIC">CNIC</label>
								<input type="text" placeholder="38201-1234567-3" ref={CNIC} />
							</div>
							<div className="formInput">
								<label htmlFor="phone">Phone</label>
								<input type="text" placeholder="+92 300 1234567" ref={phone} />
							</div>
							<div className="formInput">
								<label htmlFor="phone">Date of Birth</label>
								<input type="date" placeholder="06/11/1999" ref={dateOfBirth} />
							</div>
							<div className="formInput">
								<label htmlFor="address">Address</label>
								<input type="text" placeholder="Khushab, PK" ref={address} />
							</div>
							<div className="formInput fn">
								<label htmlFor="password">Password</label>
								<input type="password" placeholder="******" ref={password} />
							</div>
							<div className="formInput fn">
								<label htmlFor="confirmpassword">ConfirmPassword</label>
								<input
									type="password"
									placeholder="******"
									ref={confirmPassword}
								/>
							</div>
							<button type="submit">Create</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
