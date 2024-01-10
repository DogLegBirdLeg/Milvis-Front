import 'styles/transfer-page/transfer-result.css';
import TransferLoading from './components/TransferLoading/main';
import ResultInfo from './components/ResultInfo/main';
import ResultTimeTable from './components/TimeTable/main';
import usePageLoad from './hooks/usePageLoad';

function TransferResult() {
	const { states } = usePageLoad();
	const { data, loading } = states;

	if (loading) {
		return <TransferLoading />;
	}

	const { departStation, arriveStation, date, time, type, sortSchedules } =
		data;

	return (
		<div className='container-time-table-page'>
			<ResultInfo
				departStation={departStation}
				arriveStation={arriveStation}
				date={date}
				time={time}
			/>
			<ResultTimeTable
				matchTime={time}
				type={type}
				timeSchedule={sortSchedules}
			/>
		</div>
	);
}

export default TransferResult;
