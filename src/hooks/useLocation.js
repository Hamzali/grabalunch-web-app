import {useEffect, useState} from "react";

const useLocation = (watch = false, defaultLocation = [0, 0]) => {
	const [position, setPosition] = useState(null);
	useEffect(() => {
		if ("geolocation" in navigator) {
			if (watch) {
				const watchID = navigator.geolocation.watchPosition(currentPosition => setPosition(currentPosition));
				return () => navigator.geolocation.clearWatch(watchID)
			}
			navigator.geolocation.getCurrentPosition(currentPosition => setPosition(currentPosition));
		} else {
			setPosition(false);
		}
	}, [watch]);
	if (position == null || position.coords == null) {
		return defaultLocation;
	}
	const {coords}= position;
	const {latitude, longitude} = coords;
	return [latitude, longitude];
};

export default useLocation;
