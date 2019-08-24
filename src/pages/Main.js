import React, {useState, useCallback} from "react";
import useLocation from "../hooks/useLocation";

import Map from "pigeon-maps";
import UserPin from '../views/UserPin';

import {Restaurant} from 'styled-icons/boxicons-regular/Restaurant';
import Card from "../views/Card";
import PlaceForm from "../components/PlaceForm";
import CenterMapOverLay from "../views/CenterMapOverlay";
import {CREATE_PLACES} from "../data/places";
import {useMutation} from "@apollo/react-hooks";

const Main = () => {
	const position = useLocation();
	const [selectedPos, setSelectedPos] = useState([0, 0]);
	const [addPlaces, {data, called, loading}] = useMutation(CREATE_PLACES);
	const handleCreatePlace = useCallback(async ({name}) => {
		if (name) {
			const result = await addPlaces({variables: {
				objects: [
					{
						name,
						location: {
							type: 'Point',
							coordinates: selectedPos
						}
					}
				]
				}
			});
			console.log(result);
		}

	}, [selectedPos]);
	const handleBoundsChange = useCallback(({ center }) => {
		setSelectedPos(center);
	}, []);
	return <div>
		<Map center={position} zoom={18} metaWheelZoom={true} height={400} onBoundsChanged={handleBoundsChange}>
			<UserPin width={30} height={30} anchor={position}/>

			<CenterMapOverLay>
				<Restaurant size={30} color={'blue'}/>
			</CenterMapOverLay>

			<Card width={200} padding={10} margin={10}>
				<PlaceForm onSubmit={handleCreatePlace}/>
				{loading && 'Loading...'}
			</Card>
		</Map>

	</div>
};

export default Main;
