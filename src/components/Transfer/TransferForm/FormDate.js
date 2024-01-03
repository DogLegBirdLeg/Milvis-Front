import FormDescription from './FormDescription';
import useTransferForm from './hooks/useTransferForm';
import { getMinMaxDate } from '../../utils/FormDateHandler';

const FormDate = () => {
	const { states } = useTransferForm();
	const { departDate, setDepartDate } = states;
	const { minDate, maxDate } = getMinMaxDate;

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
