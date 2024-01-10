import { TRAIN_OPTION } from 'utils/Constant';
import TimeCardItem from './TimeCardItem';

function TimeCardList({
	searchType,
	timeSchedule,
	cardClassNames,
	noticeTime,
}) {
	const { DEPART_ENG } = TRAIN_OPTION;

	return timeSchedule.map((schedule, index) => {
		const { type: transportType, name, departTime, arriveTime } = schedule;
		const time =
			transportType === 'bus'
				? Number(
						searchType === DEPART_ENG
							? arriveTime.split(':')[0]
							: departTime.split(':')[0]
				  )
				: Number(
						searchType === DEPART_ENG
							? departTime.split(':')[0]
							: arriveTime.split(':')[0]
				  );

		const cardType =
			transportType === 'bus' && searchType === DEPART_ENG
				? 'depart-card'
				: transportType !== 'bus' && searchType === DEPART_ENG
				? 'arrive-card'
				: transportType === 'bus' && searchType !== DEPART_ENG
				? 'arrive-card'
				: 'depart-card';

		return time === noticeTime ? (
			<TimeCardItem
				key={index}
				cardClassName={cardClassNames[index]}
				type={cardType}
				name={name}
				departTime={departTime}
				arriveTime={arriveTime}
			/>
		) : null;
	});
}

export default TimeCardList;
