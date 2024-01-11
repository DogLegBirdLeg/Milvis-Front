import { calMaxDate } from 'utils/calMaxDate';
import FormDescription from './FormDescription';

const FormDate = ({ departDate, setDepartDate }) => {
	const minMaxDate = {
		minDate: new Date().toISOString().split('T')[0],
		maxDate: calMaxDate(),
	};

	const { minDate, maxDate } = minMaxDate;

	return (
		<div>
			<FormDescription type={'DATE'} />
			<input
				onChange={(event) => setDepartDate(event.target.value)}
				className='date-input-container'
				required
				min={minDate}
				max={maxDate}
				id='date'
				value={departDate}
				type='date'
			/>
		</div>
	);
};

export default FormDate;
