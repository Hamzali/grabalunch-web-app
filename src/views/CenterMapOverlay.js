import React from 'react';
import MapOverlay from "./MapOverlay";

const CenterMapOverLay = ({children}) => {
	return <MapOverlay top={'50%'} left={'50%'}>
		{children}
	</MapOverlay>
};

export default CenterMapOverLay;

