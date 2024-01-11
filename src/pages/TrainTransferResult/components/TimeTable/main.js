import { makeStandardTimes } from 'utils/TrainTransferResult/MakeNoticeTimes';
import { makeCardClassNames } from 'utils/TrainTransferResult/makeCardMargin';
import TimeTableHeader from './TimeTableHeader';
import TimeNotice from './TimeNotice';
import TimeCardList from './TimeCardList';

function TimeTable({ type, timeSchedule }) {
	const standardTimes = makeStandardTimes(type, timeSchedule);
	const cardClassNames = makeCardClassNames(type, timeSchedule);
	const currTime = new Date().getHours();

	return (
		<div className='container-time-table'>
			<TimeTableHeader type={type} />
			<div class='time-table'>
				{standardTimes.map((time, key) => {
					return (
						<div className='container-time-section' key={key}>
							<TimeNotice time={time} prevTime={time < currTime} />
							<TimeCardList
								searchType={type}
								noticeTime={time}
								cardClassNames={cardClassNames}
								timeSchedule={timeSchedule}
							/>
						</div>
					);
				})}
				<div id='line'></div>
			</div>
		</div>
	);
}

export default TimeTable;
