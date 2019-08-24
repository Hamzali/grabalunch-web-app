// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./auth/AuthProvider";
import config from "./auth/auth_config.json";
// import {ClientContext, GraphQLClient} from 'graphql-hooks'
import theme from "./style/theme";
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import GraphQLProvider from "./data/GraphQLProvider";

// const gql_configs = {
// 	url: 'https://grabalunch.herokuapp.com/v1/graphql'
// };
// const client = new GraphQLClient(gql_configs);


ReactDOM.render(
	<Auth0Provider
		domain={config.domain}
		client_id={config.clientId}
		redirect_uri={window.location.origin}
	>
		<GlobalStyle/>
		<GraphQLProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</GraphQLProvider>

	</Auth0Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
