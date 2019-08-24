import { split, concat, ApolloLink } from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';


import {ApolloClient} from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import React from "react";
import {TOKEN_LABEL} from "../common/constants";

// Create an http link:
const httpLink = new HttpLink({
	uri: 'https://grabalunch.herokuapp.com/v1/graphql'
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
	uri: `wss://grabalunch.herokuapp.com/v1/graphql`,
	options: {
		reconnect: true
	}
});

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext(({headers}) => ({
		headers: {
			...headers,
			Authorization: 'Bearer ' + localStorage.getItem(TOKEN_LABEL) || null,
		}
	}));

	return forward(operation);
});
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
	// split based on operation type
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		);
	},
	wsLink,
	httpLink,
);

const client = new ApolloClient({
	link: concat(authMiddleware, link),
	cache: new InMemoryCache()
});


export default ({children}) => <ApolloProvider client={client}>{children}</ApolloProvider>
