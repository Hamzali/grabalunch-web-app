import Card from "../views/Card";
import lunchSplash from "../assets/images/splash-lunch.jpg";
import React from "react";

const Index = () => {
	return <>
		<Card marginLeft={100} width={700} padding={10}>
			<img src={lunchSplash} alt="lunch-friends" width={500}/>
			<h1>
				Don't be shy grab a lunch!
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</Card>
	</>
};

export default Index;
