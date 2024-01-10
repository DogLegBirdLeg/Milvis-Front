import { getMinMaxDate } from 'utils/FormDateHandler';
import FormDescription from './FormDescription';

const FormDate = ({ departDate, setDepartDate }) => {
	const { minDate, maxDate } = getMinMaxDate();

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
