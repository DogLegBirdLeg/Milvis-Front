import FormDescription from './FormDescription';
import useTransferForm from './hooks/useTransferForm';
import { makeTimeOptions } from '../../utils/FormTimeHandler';

const TransferFormTime = () => {
	const { states } = useTransferForm();
	const { departTime, setDepartTime } = states;
	const times = makeTimeOptions();

	return (
		<div>
			<FormDescription type={'TIME'} />
			<select onChange={(e) => setDepartTime(e.target.value)} id='time'>
				<optgroup className='time-options'>
					{times.map((item, index) => {
						return (
							<option selected={departTime === item ? true : false} key={index}>
								{item}
							</option>
						);
					})}
				</optgroup>
			</select>
		</div>
	);
};

export default TransferFormTime;
