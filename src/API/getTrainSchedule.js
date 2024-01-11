const API_END_POINT = process.env.REACT_APP_API_END_POINT;

async function getTrainSchedule(departCode, arriveCode, trainDate) {
	try {
		const trainObject = {
			depart_station_code: departCode,
			arrive_station_code: arriveCode,
			depart_date: trainDate,
		};

		const trainQuery = new URLSearchParams(trainObject).toString();
		const url = API_END_POINT + '/schedule-matching/train?' + trainQuery;
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			return data;
		}
	} catch (e) {
		console.log(e);
	}
}

export default getTrainSchedule;
