/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

import 'styles/transfer-page/transfer-result.css';
import TransferLoading from 'components/Transfer/TransferLoading';
import ResultInfo from 'components/Transfer/ResultInfo';
import ResultTimeTable from 'components/Transfer/ResultTimeTable';
import submitForm from 'utils/train/SubmitForm';

function TransferResultPage() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null);

	const handleLoadWindow = useCallback(async () => {
		try {
			const { submitData } = state;
			const data = await submitForm(submitData);
			setData(data);
		} catch (error) {
			setError(true);
		}
	}, []);

	useEffect(() => {
		if (state === null) {
			setError(true);
		}
		handleLoadWindow();
	}, []);

	useEffect(() => {
		if (data) setLoading(false);
	}, [data]);

	if (error) {
		alert('네트워크를 확인해주시거나 올바른 경로로 접근해주세요.');
		navigate('/train');
	}

	return (
		<div className='container-time-table-page'>
			{loading ? (
				<TransferLoading />
			) : (
				<>
					<ResultInfo
						departStation={data.departStation}
						arriveStation={data.arriveStation}
						date={data.date}
						time={data.time}
					/>
					<ResultTimeTable
						matchTime={data.time}
						type={data.type}
						timeSchedule={data.sortSchedules}
					/>
				</>
			)}
		</div>
	);
}

export default TransferResultPage;
