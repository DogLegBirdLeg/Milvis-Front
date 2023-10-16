import getStationCode from './getStationCode';
import makeStandardData from './makeStandardData';
import { FUNC1_BUS_DATE_URL, FUNC1_TRAIN_DATA_URL } from 'API/API_URL';

async function submitForm({
	departDate,
	departTime,
	departStation,
	arriveStation,
}) {
	const isDepart = departStation === '밀양' ? true : false;
	const [departCode, arriveCode] = getStationCodes(
		isDepart,
		departStation,
		arriveStation
	);
	const [trainDate, busDate] = getDepartDate(departDate, departTime);
	const totalData = {
		type: isDepart ? 'depart' : 'arrive',
		departStation,
		arriveStation,
		date: departDate.split('-'),
		time: departTime,
	};

	const busData = await getBusData(isDepart, busDate);
	const trainData = await getTrainData(departCode, arriveCode, trainDate);

	if (busData.length !== 0 && trainData.length !== 0) {
		makeStandardData(totalData, busData, trainData);
	}
	return totalData;
}

async function getBusData(isDepart, busDate) {
	try {
		const busObject = {
			direction: isDepart ? '밀양' : '부산대',
			depart_datetime: busDate,
		};

		const busQuery = new URLSearchParams(busObject);
		const url = FUNC1_BUS_DATE_URL + busQuery;

		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			return data;
		}
	} catch (e) {
		console.log(e);
	}
}

async function getTrainData(departCode, arriveCode, trainDate) {
	try {
		const trainObject = {
			depart_station_code: departCode,
			arrive_station_code: arriveCode,
			depart_date: trainDate,
		};

		const trainQuery = new URLSearchParams(trainObject);
		const url = FUNC1_TRAIN_DATA_URL + trainQuery;
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			return data;
		}
	} catch (e) {
		console.log(e);
	}
}

function getDepartDate(departDate, departTime) {
	const trainDate = departDate.split('-').join('');
	const busDate = trainDate + departTime + '0000';

	return [trainDate, busDate];
}

function getStationCodes(isDepart, departStation, arriveStation) {
	const miryangCode = 'NAT013841';
	const anotherStationCode = isDepart
		? getStationCode(arriveStation)
		: getStationCode(departStation);

	return isDepart
		? [miryangCode, anotherStationCode]
		: [anotherStationCode, miryangCode];
}

export default submitForm;
