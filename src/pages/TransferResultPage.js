/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import 'styles/transfer-page/transfer-result.css';
import TransferLoading from 'components/Transfer/TransferLoading';
import ResultInfo from 'components/Transfer/ResultInfo';
import ResultTimeTable from 'components/Transfer/ResultTimeTable';
import submitForm from 'utils/train/SubmitForm';

function TransferResultPage() {
	const { state } = useLocation();
	const { submitData } = state;
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);

	const handleLoadWindow = useCallback(async () => {
		const data = await submitForm(submitData);
		setData(data);
	}, []);

	useEffect(() => {
		handleLoadWindow();
	}, [handleLoadWindow]);

	useEffect(() => {
		if (data) setLoading(false);
	}, [data]);

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
