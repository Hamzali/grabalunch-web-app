import React  from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "../auth/AuthProvider";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
	const { isAuthenticated } = useAuth0();
	if (!isAuthenticated) {
		return Redirect('/');
	}
	return <Route path={path} component={Component} {...rest} />;
};

export default PrivateRoute;
