const BUS = 'bus';
const TRAIN = 'train';
const DEPART_ENG = 'depart';
const ARRIVE_ENG = 'arrive';

const makeStandardData = (data, bus, train) => {
	const busData = makeStandardBusData(bus.schedules);
	const trainData = makeStandardTrainData(train.schedules, data.time);
	data.sortSchedules = sortDatas(data.type, busData, trainData);
};
// 버스 파라미터 수정
const makeStandardBusData = (data) => {
	const busData = [];

	for (let schedule of data) {
		const info = {};

		info.type = BUS;
		info.name = schedule.line_name;
		info.departTime =
			schedule.depart_time.slice(8, 10) +
			':' +
			schedule.depart_time.slice(10, 12);
		info.arriveTime =
			schedule.arrive_time.slice(8, 10) +
			':' +
			schedule.arrive_time.slice(10, 12);

		busData.push(info);
	}

	return busData;
};
// 기차 파라미터 수정
const makeStandardTrainData = (data, time) => {
	const trainData = [];

	for (let schedule of data) {
		const departHour = schedule.depart_datetime.slice(8, 10);
		if (Number(departHour) < time) {
			continue;
		}
		const info = {};

		info.type = TRAIN;
		info.name = schedule.train_name;
		info.departTime =
			schedule.depart_datetime.slice(8, 10) +
			':' +
			schedule.depart_datetime.slice(10, 12);
		info.arriveTime =
			schedule.arrive_datetime.slice(8, 10) +
			':' +
			schedule.arrive_datetime.slice(10, 12);

		trainData.push(info);
	}

	return trainData;
};
// 시간 순에 따라 정렬
const sortDatas = (type, busData, trainData) => {
	const sortTimeSchedules = [];

	if (type === DEPART_ENG) {
		// depart type: 버스 arrive - 기차 depart 비교
		sortDepartTypeSchedules(busData, trainData, sortTimeSchedules);
	}
	if (type === ARRIVE_ENG) {
		// arrive type: 버스 depart - 기차 arrive 비교
		sortArriveTypeSchedules(busData, trainData, sortTimeSchedules);
	}

	return sortTimeSchedules;
};
// depart type: 버스 arrive - 기차 depart 비교
const sortDepartTypeSchedules = (bus, train, sortTimeSchedules) => {
	let busPointer = 0;
	let trainPointer = 0;

	while (busPointer < bus.length || trainPointer < train.length) {
		const busTime = bus[busPointer];
		const trainTime = train[trainPointer];

		if (busTime === undefined) {
			sortTimeSchedules.push(trainTime);
			trainPointer++;
			continue;
		}

		if (trainTime === undefined) {
			sortTimeSchedules.push(busTime);
			busPointer++;
			continue;
		}

		const [busDepart, trainArrive] = makeTimeToNumber(
			busTime.arriveTime,
			trainTime.departTime
		);

		if (busDepart <= trainArrive) {
			sortTimeSchedules.push(busTime);
			busPointer++;
		} else {
			sortTimeSchedules.push(trainTime);
			trainPointer++;
		}
	}
};
// arrive type: 버스 depart - 기차 arrive 비교
const sortArriveTypeSchedules = (bus, train, sortTimeSchedules) => {
	let busPointer = 0;
	let trainPointer = 0;

	while (busPointer < bus.length || trainPointer < train.length) {
		const busTime = bus[busPointer];
		const trainTime = train[trainPointer];

		if (busTime === undefined) {
			sortTimeSchedules.push(trainTime);
			trainPointer++;
			continue;
		}

		if (trainTime === undefined) {
			sortTimeSchedules.push(busTime);
			busPointer++;
			continue;
		}

		const [busDepart, trainArrive] = makeTimeToNumber(
			busTime.departTime,
			trainTime.arriveTime
		);

		if (busDepart <= trainArrive) {
			sortTimeSchedules.push(busTime);
			busPointer++;
		} else {
			sortTimeSchedules.push(trainTime);
			trainPointer++;
		}
	}
};

const makeTimeToNumber = (busTime, trainTime) => {
	if (busTime !== undefined) {
		busTime = busTime.split(':').join('');
		Number(busTime);
	}

	if (trainTime !== undefined) {
		trainTime = trainTime.split(':').join('');
		Number(trainTime);
	}

	return [busTime, trainTime];
};

export default makeStandardData;
