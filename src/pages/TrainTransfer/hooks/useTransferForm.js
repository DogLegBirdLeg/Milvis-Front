import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const useTransferForm = () => {
	const [departDate, setDepartDate] = useState(
		new Date().toISOString().split('T')[0]
	);
	const [departTime, setDepartTime] = useState('06');
	const [departStation, setDepartStation] = useState('밀양');
	const [arriveStation, setArriveStation] = useState('부산');

	const navigate = useNavigate();

	const handleSubmitForm = (event) => {
		event.preventDefault();

		const submitData = {
			departDate,
			departTime,
			departStation,
			arriveStation,
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
		},
		methods: {
			handleSubmitForm,
			setDepartDate,
			setDepartTime,
			setDepartStation,
			setArriveStation,
		},
	};
};

export default useTransferForm;
