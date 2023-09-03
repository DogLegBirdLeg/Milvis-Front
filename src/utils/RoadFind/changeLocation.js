/*global kakao*/
const geocoder = new kakao.maps.services.Geocoder();

const searchDetailAddFromcoords = (coords, callback) => {
	geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
};

export const changeLocation = async(map, setUserLocation) => {
	searchDetailAddFromcoords(map.getCenter(), (result, status) => {
		if (status === kakao.maps.services.Status.OK) {
			setUserLocation(result[0].address.address_name);
		}
	});
};
