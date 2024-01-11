import codeData from 'assets/json/StationCode.json';

const getStationCode = (name) => {
	const { stations } = codeData;

	for (let station of stations) {
		if (name === station.name) {
			return station.code;
		}
	}

	alert('찾으시는 역 명이 없습니다');
};

export default getStationCode;
