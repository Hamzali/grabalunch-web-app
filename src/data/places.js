import gql from 'graphql-tag';


export const READ_PLACES = gql`
    query ReadPlaces($limit: Int) {
        place(limit: $limit) {
            id
            location
	        name
        }
    }`;

export const CREATE_PLACES = gql`
    mutation InsertLandmark($objects: [place_insert_input!]!) {
        insert_place(objects: $objects) {
            returning{
                id
                name
                location
            }
        }
    }
`;
