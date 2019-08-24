import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import NavBar from "./components/NavBar";

import ProfilePage from "./pages/Profile";
import IndexPage from "./pages/Index";
import MainPage from "./pages/Main";
import MealPage from "./pages/Meal";

import {useAuth0} from "./auth/AuthProvider";
import hot from 'react-hot-reload.macro'
import Content from "./views/Content";


function App() {
	const {handleAuth} = useAuth0();

	return (
		<BrowserRouter>
			<NavBar />
			<Content padding={16}>
				<Switch>
					<Route path="/" exact render={(props) => {
						if (/access_token|id_token|error/.test(props.location.hash)) {
							handleAuth(props);
						}
						return <IndexPage/>;
					}}/>
					<Route path='/map' component={MainPage}/>
					<PrivateRoute path="/meals" component={MealPage} />
					<PrivateRoute path="/profile" component={ProfilePage} />
				</Switch>
			</Content>
		</BrowserRouter>
	);
}

export default hot(App);
