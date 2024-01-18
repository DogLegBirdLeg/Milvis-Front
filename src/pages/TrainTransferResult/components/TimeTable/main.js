import { makeStandardTimes } from 'utils/TrainTransferResult/MakeNoticeTimes';
import { makeCardClassNames } from 'utils/TrainTransferResult/makeCardMargin';
import TimeTableHeader from './TimeTableHeader';
import TimeNotice from './TimeNotice';
import TimeCardList from './TimeCardList';

function TimeTable({ type, timeSchedule }) {
	const standardTimes = makeStandardTimes(type, timeSchedule);
	const cardClassNames = makeCardClassNames(type, timeSchedule);
	const currTime = new Date().getHours();

	if (timeSchedule.length === 0) {
		alert('해당 날짜의 시간표가 없습니다! 다른 시간표로 다시 시도해보세요!');
	}

	return (
		<div className='container-time-table'>
			<TimeTableHeader type={type} />
			<div className='time-table'>
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
