/*global kakao*/
export const makeBusStationMarker = (map, stationData, handleSelectStation) => {
	const busStationPositions = stationData.map((element) => {
		const { latitude, longitude } = element;
		const { name } = element;

		return {
			title: name,
			latlng: new kakao.maps.LatLng(latitude, longitude),
		};
	});

	busStationPositions.forEach((element, index) => {
		const marker = new kakao.maps.Marker({
			map: map,
			position: element.latlng,
		});

		kakao.maps.event.addListener(marker, 'click', () => {
			handleSelectStation(stationData[index]);
		});
	});
};
