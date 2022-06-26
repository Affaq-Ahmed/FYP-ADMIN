import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admins } from "./pages/admins/Admins";
import { Categories } from "./pages/categories/Categories";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { NewAdmin } from "./pages/newAdmin/NewAdmin";
import { Single } from "./pages/single/Single";
import { Users } from "./pages/users/Users";
import { NewCategory } from "./pages/newCategory/NewCategory";
import { DisplayUser } from "./pages/displayUser/DisplayUser";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin">
					<Route index element={<Admins />} />
					<Route path="newAdmin" element={<NewAdmin />} />
				</Route>
				<Route path="/category">
					<Route index element={<Categories />} />
					<Route path="newCategory" element={<NewCategory />} />
				</Route>
				<Route path="/users">
					<Route index element={<Users />} />
					<Route path=":id">
						<Route index element={<Single />} />
						<Route path="displayUser" element={<DisplayUser />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
