import { TRAIN_OPTION } from 'constants/Constant';

function TimeTableHeader({ type }) {
	return (
		<div className='header-time-table'>
			<div>
				{type === TRAIN_OPTION.DEPART_ENG
					? TRAIN_OPTION.BUS
					: TRAIN_OPTION.TRAIN}
			</div>
			<div>
				{type === TRAIN_OPTION.DEPART_ENG
					? TRAIN_OPTION.TRAIN
					: TRAIN_OPTION.BUS}
			</div>
		</div>
	);
}
export default TimeTableHeader;
