/*global kakao*/
const geocoder = new kakao.maps.services.Geocoder();
const placeSearcher = new kakao.maps.services.Places();

const searchDetailAddFromcoords = (coords, callback) => {
	geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
};

export const changeLocation = async (position, setUserLocation) => {
	searchDetailAddFromcoords(position, (result, status) => {
		if (status === kakao.maps.services.Status.OK) {
			const keyword = result[0].address.address_name;

			placeSearcher.keywordSearch(keyword, (data, status) => {
				if (status === kakao.maps.services.Status.OK) {
					setUserLocation(data[0].place_name);
					return;
				}
				if (status === kakao.maps.services.ZERO_RESULT) {
					setUserLocation(keyword);
					return;
				}
				if (status === kakao.maps.services.ERROR) {
					alert('검색 도중 오류가 발생했습니다.');
					return;
				}
			});
		}
	});
};
