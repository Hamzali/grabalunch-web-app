import React, { useState, useEffect, useContext } from "react";
import auth0 from "auth0-js";
import {TOKEN_LABEL} from "../common/constants";


export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

export function Auth0Provider({children, domain, client_id, redirect_uri}) {
	const [finished, setFinished] = useState(false);
	const [auth0Client, setAuth0Client] = useState(null);
	const [idToken, setIdToken] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);
	useEffect(() => {
		setAuth0Client(new auth0.WebAuth({
			domain,
			clientID: client_id,
			redirectUri: redirect_uri,
			responseType: "token id_token",
			scope: "openid profile"
		}));
	}, [domain, client_id, redirect_uri]);
	useEffect(() => {
		if (auth0Client != null) {
			auth0Client.checkSession({}, (err, result) => {
				if (err) {
					setFinished(true);
					return console.error(result);
				}
				if (result && result.idToken) {
					setIsAuthenticated(true);
					setIdToken(result.idToken);
					localStorage.setItem(TOKEN_LABEL, result.idToken);
					auth0Client.client.userInfo(result.accessToken, function(err, user) {
						if (err) {
							return console.error(err);
						}
						setUser(user);
					});
				}
				setFinished(true);
			})
		}
	}, [auth0Client]);

	const value = {
		login: () => {
			return auth0Client.authorize((err) => {
				if (err) {
					return console.error(err);
				}
			});
		},
		logout: () => {
			auth0Client.logout({
				returnTo: redirect_uri
			});
			setIdToken(null);
			localStorage.removeItem(TOKEN_LABEL);
			setIsAuthenticated(false);
		},
		handleAuth: ({history}) => {
			auth0Client.parseHash((err, result) => {
				if (err) {
					return console.error(err);
				}
				history.replace("/");
				auth0Client.client.userInfo(result.accessToken, function(err, user) {
					if (err) {
						return console.error(err);
					}
					setUser(user);
				});
				localStorage.setItem(TOKEN_LABEL, result.idToken);
				setIdToken(result.idToken);
				setIsAuthenticated(true);
			});
		},
		idToken,
		isAuthenticated,
		user
	};
	return <Auth0Context.Provider value={value}>
		{finished ? children : 'loading...'}
	</Auth0Context.Provider>
}
