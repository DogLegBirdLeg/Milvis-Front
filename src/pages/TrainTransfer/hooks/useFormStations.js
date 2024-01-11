import { useEffect, useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import STATIONS from 'assets/json/Station';

const useFormStations = ({
	departStation,
	setDepartStation,
	arriveStation,
	setArriveStation,
}) => {
	const { run } = useDebounce();
	const [departToggle, setDepartToggle] = useState(false);
	const [arriveToggle, setArriveToggle] = useState(false);
	const [stationLists, setStationLists] = useState([]);
	const [searchInputValue, setSearchInputValue] = useState('');

	const handleChangeInputValue = (event) => {
		const { value } = event.target;

		setSearchInputValue(value);
	};

	const handleReverseStation = () => {
		setDepartStation(arriveStation);
		setArriveStation(departStation);
	};

	const handleClickDepartStation = () => {
		setDepartToggle(!departToggle);
		setArriveToggle(false);
	};

	const handleClickArriveStation = () => {
		setArriveToggle(!arriveToggle);
		setDepartToggle(false);
	};

	const handleChangeStation = (event) => {
		const li = event.target.closest('li');

		if (!li) return;

		const { innerText } = li;
		if (departToggle) {
			setDepartStation(innerText);
		}

		if (arriveToggle) {
			setArriveStation(innerText);
		}
	};

	const isIncludeKeyword = (station, keyword) => {
		keyword = '^' + keyword;
		const reg = new RegExp(keyword);

		return reg.test(station) ? true : false;
	};

	const makeStationLists = (keyword) => {
		const stationLists = [];

		if (keyword === '') {
			setStationLists(stationLists);
			return;
		}

		STATIONS.forEach((station) => {
			if (isIncludeKeyword(station, keyword)) {
				stationLists.push(station);
			}
		});

		setStationLists(stationLists);
	};

	const handleSearchStationByInputValue = (event) => {
		const { value } = event.target;

		run(() => {
			makeStationLists(value);
		});
	};

	useEffect(() => {
		if (departStation !== '밀양') {
			setArriveStation('밀양');
			setDepartToggle(false);
			setStationLists([]);
		}
	}, [departStation, setArriveStation]);

	useEffect(() => {
		if (arriveStation !== '밀양') {
			setDepartStation('밀양');
			setArriveToggle(false);
			setStationLists([]);
		}
	}, [arriveStation, setDepartStation]);

	return {
		states: {
			departToggle,
			arriveToggle,
			stationLists,
			searchInputValue,
		},
		methods: {
			handleChangeInputValue,
			handleReverseStation,
			handleClickDepartStation,
			handleClickArriveStation,
			handleSearchStationByInputValue,
			handleChangeStation,
		},
	};
};

export default useFormStations;
