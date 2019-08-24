import React from "react";
import { useQuery } from '@apollo/react-hooks';
import {MEALS_QUERY} from "../data/meals";


function Meal() {
	const { loading, error, data = {} } = useQuery(MEALS_QUERY, {
		variables: {
			limit: 10
		}
	});
	const {meal} = data;
	return <div>
		<h1>Meals</h1>
		{loading && 'loading'}
		{error && 'error ' + error.message}
		<ul>
		{(meal && meal.length > 0) ? meal.map((d, key) => <li key={key}>{d.description} {d.place.name}</li>) : 'no data'}
		</ul>
	</div>;
}

export default Meal;
