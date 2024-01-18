import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';
import makeStandardData from 'utils/TrainTransferResult/makeStandardData';
import {
	getAllStationCode,
	getDepartDate,
} from 'utils/TrainTransferResult/SubmitForm';
import getBusSchedule from 'API/getBusSchedule';
import getTrainSchedule from 'API/getTrainSchedule';

function usePageLoad() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const [data, setData] = useState(undefined);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (state === null) {
			setError(true);
		}
	}, [state, navigate]);

	const submitForm = async ({
		departDate,
		departTime,
		departStation,
		arriveStation,
		section,
	}) => {
		const isDepart = departStation === '밀양' ? true : false;
		const [departCode, arriveCode] = getAllStationCode(
			isDepart,
			departStation,
			arriveStation
		);
		const departDateTime = getDepartDate(departDate, departTime);
		const totalData = {
			type: isDepart ? 'depart' : 'arrive',
			departStation,
			arriveStation,
			date: departDate.split('-'),
			time: departTime,
		};

		const busData = await getBusSchedule(isDepart, departDateTime, section);
		const trainData = await getTrainSchedule(
			departCode,
			arriveCode,
			departDateTime
		);

		if (busData && trainData) {
			makeStandardData(totalData, busData, trainData);
		}
		return totalData;
	};

	const handleLoadWindow = useCallback(async () => {
		try {
			const data = await submitForm(state.submitData);
			setData(data);
		} catch (error) {
			setError(true);
		}
	}, [state]);

	useEffect(() => {
		if (error && state === null) {
			alert('올바른 경로로 다시 접근해주세요!');
			navigate('/train');
		} else if (error) {
			alert('서버에서 데이터를 받아오지 못했습니다. 다시 시도해주세요.');
			navigate('/train');
		}
	}, [error, navigate, state]);

	useEffect(() => {
		handleLoadWindow();
	}, [handleLoadWindow]);

	useEffect(() => {
		if (data) setLoading(false);
	}, [data]);

	return {
		states: {
			data,
			loading,
			error,
		},
	};
}

export default usePageLoad;
