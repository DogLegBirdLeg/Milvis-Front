/*global kakao*/
export const makeBusStationMarker = (
	map,
	stationData,
	handleSelectStation = null,
	addEvent = false
) => {
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

		addEvent &&
			kakao.maps.event.addListener(marker, 'click', () => {
				handleSelectStation(stationData[index]);
			});
	});
};
