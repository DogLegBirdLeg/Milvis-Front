import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const busTypes = {
	평일: 'WEEKDAY',
	'주말 & 공휴일': 'HOLIDAY',
	'대학 방학': 'CAMPUS-ONLY',
};

const useTransferForm = () => {
	const [departDate, setDepartDate] = useState(
		new Date().toISOString().split('T')[0]
	);
	const [departTime, setDepartTime] = useState('06');
	const [departStation, setDepartStation] = useState('밀양');
	const [arriveStation, setArriveStation] = useState('부산');
	const [busType, setBusType] = useState('평일');

	const navigate = useNavigate();

	const handleSubmitForm = (event) => {
		event.preventDefault();

		const submitData = {
			departDate,
			departTime,
			departStation,
			arriveStation,
			section: busTypes[busType],
		};

		navigate('/train/time-table', {
			state: {
				submitData,
			},
		});
	};

	return {
		states: {
			departDate,
			departTime,
			departStation,
			arriveStation,
			busType: busTypes[busType],
		},
		methods: {
			handleSubmitForm,
			setDepartDate,
			setDepartTime,
			setDepartStation,
			setArriveStation,
			setBusType,
		},
	};
};

export default useTransferForm;
