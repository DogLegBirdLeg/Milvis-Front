const API_END_POINT = process.env.REACT_APP_API_END_POINT;

async function getBusSchedule(isDepart, busDate) {
	try {
		const busObject = {
			direction: isDepart ? '밀양' : '부산대',
			depart_datetime: busDate,
		};

		const busQuery = new URLSearchParams(busObject).toString();
		const url = API_END_POINT + '/schedule-matching/bus?' + busQuery;

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
