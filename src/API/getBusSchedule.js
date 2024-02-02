const API_END_POINT = process.env.REACT_APP_API_END_POINT;

async function getBusSchedule(isDepart, busDate, section = 'WEEKDAY') {
	console.log(section);
	try {
		const busObject = {
			direction: isDepart ? 'STATION' : 'CAMPUS',
			section: section,
			depart_datetime: busDate,
		};

		const busQuery = new URLSearchParams(busObject).toString();
		const url = API_END_POINT + '/api/schedule/bus?' + busQuery;

		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			return data;
		}
	} catch (e) {
		console.log(e);
	}
}

export default getBusSchedule;
