import React from 'react';
import { useLocation } from 'react-router';

import 'styles/transfer-page/transfer-result.css';
import ResultInfo from 'components/Transfer/ResultInfo';
import ResultTimeTable from 'components/Transfer/ResultTimeTable';

function TransferResultPage() {
	const { state } = useLocation();
	const data = state;

	console.log(data);

	return (
		<div className='container-time-table-page'>
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
		</div>
	);
}

export default TransferResultPage;
