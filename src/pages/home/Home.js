import React, { useEffect, useState } from "react";
import "./home.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Widgets } from "../../components/widgets/Widgets";
import { NewUsers } from "../../components/newUsers/NewUsers";
import { HomeTransactions } from "../../components/homeTransactions/HomeTransactions";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Home = () => {
	const location = useLocation();
	const [user, setUser] = useState(location.user);
	const [pendingUsers, setPendingUsers] = useState([]);
	const [userCount, setUserCount] = useState(0);
	const [newuserCount, setNewUserCount] = useState(0);
	const [serviceCount, setServiceCount] = useState(0);
	const [newServiceCount, setNewServiceCount] = useState(0);
	const [orderCount, setOrderCount] = useState(0);
	const [newOrderCount, setNewOrderCount] = useState(0);
	console.log(location.user);

	useEffect(() => {
		setUser(location.user);
		const getPendingUsers = async () => {
			try {
				const pendingUsers = await axios.get(
					"https://tap-n-hire.herokuapp.com/api/users/pendingUsers"
				);
				console.log(pendingUsers.data);
				setPendingUsers(pendingUsers.data);
			} catch (err) {
				console.log(err.message);
			}
		};

		const userCount = async () => {
			try {
				const userCount = await axios.get(
					"https://tap-n-hire.herokuapp.com/api/users/userCount"
				);
				console.log(userCount);
				setNewUserCount(userCount.data.newUsers);
				setUserCount(userCount.data.userCount);
			} catch (err) {
				console.log(err.message);
			}
		};

		const serviceCount = async () => {
			try {
				const serviceCount = await axios.get(
					"https://tap-n-hire.herokuapp.com/api/services/count"
				);
				console.log(serviceCount);
				setNewServiceCount(serviceCount.data.newServiceCount);
				setServiceCount(serviceCount.data.serviceCount);
			} catch (error) {
				console.log(error.message);
			}
		};

		const orderCount = async () => {
			try {
				const orderCount = await axios.get(
					"https://tap-n-hire.herokuapp.com/api/order/count"
				);
				console.log(orderCount);
				setNewOrderCount(orderCount.data.newOrderCount);
				setOrderCount(orderCount.data.orderCount);
			} catch (error) {
				console.log(error.message);
			}
		};

		getPendingUsers();
		userCount();
		serviceCount();
		orderCount();
	}, [location.user]);
	return (
		<div className="home">
			<Sidebar user={user} />
			<div className="homeContainer">
				<Navbar user={user} />
				<div className="widgets">
					<Widgets type="users" count={userCount} newCount={newuserCount} />
					<Widgets type="orders" count={orderCount} newCount={newOrderCount} />
					<Widgets
						type="services"
						count={serviceCount}
						newCount={newServiceCount}
					/>
				</div>
				<div className="Tables">
					<NewUsers pendingUsers={pendingUsers} />
					<HomeTransactions />
				</div>
			</div>
		</div>
	);
};
