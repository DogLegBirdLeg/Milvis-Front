import { TRAIN_OPTION, TRAIN_OPTION_EXPLAIN } from 'utils/Constant';

const FormDescription = ({ type }) => {
	return (
		<>
			<label>{TRAIN_OPTION[type]}</label>
			<p className='small-explain'>{TRAIN_OPTION_EXPLAIN[type]}</p>
		</>
	);
};

export default FormDescription;
