import gql from 'graphql-tag';


export const MEALS_QUERY = gql`
    query Meal($limit: Int) {
        meal(limit: $limit) {
            id
            description
            place {
                name
            }
            host_id
        }
    }`;

export const CREATE_MEAL = gql`
	mutation CreateMeal($hostId: ID) {
		insert_meal(objects: [{host_id: $hostId}]) {
			affected_rows
		}
	}
`;
