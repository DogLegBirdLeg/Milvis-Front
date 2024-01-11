import STATION_CODES from 'assets/json/StationCode.json';

export function getDepartDate(departDate, departTime) {
	const trainDate = departDate.split('-').join('');
	const busDate = trainDate + departTime + '0000';

	return [trainDate, busDate];
}

export function getAllStationCode(isDepart, departStation, arriveStation) {
	const miryangCode = 'NAT013841';
	const anotherStationCode = isDepart
		? getStationCode(arriveStation)
		: getStationCode(departStation);

	return isDepart
		? [miryangCode, anotherStationCode]
		: [anotherStationCode, miryangCode];
}

function getStationCode(name) {
	const { stations } = STATION_CODES;

	for (let station of stations) {
		if (name === station.name) {
			return station.code;
		}
	}

	alert('찾으시는 역 명이 없습니다');
}
