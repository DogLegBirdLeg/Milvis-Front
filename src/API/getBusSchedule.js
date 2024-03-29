const API_END_POINT = process.env.REACT_APP_API_END_POINT;

async function getBusSchedule(isDepart, busDate, section = 'WEEKDAY') {
	try {
		const busObject = {
			direction: isDepart ? 'STATION' : 'CAMPUS',
			section: section,
			depart_datetime: busDate,
		};

		const busQuery = new URLSearchParams(busObject).toString();
		const url = API_END_POINT + '/schedule/bus?' + busQuery;

		const response = await fetch(url);

		if (response.ok) {
			const data = await response.json();
			return { data, statusCode: 200, errorMessage: undefined };
		} else {
			const errorMessage = await response.json();
			return {
				data: undefined,
				statusCode: response.status,
				errorMessage: errorMessage.msg,
			};
		}
	} catch (e) {
		console.log(e);
	}
}

export default getBusSchedule;
