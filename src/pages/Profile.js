import React from "react";
import {useAuth0} from "../auth/AuthProvider";

const Profile = () => {
	const {user} = useAuth0();

	if (!user) {
		return "Loading...";
	}

	return (
		<>
			<img src={user.picture} alt="Profile"/>

			<h2>{user.name}</h2>
			<p>{user.email}</p>
			<code>{JSON.stringify(user, null, 2)}</code>
		</>
	);
};

export default Profile;
