import { makeTimeOptions } from 'utils/TrainTransfer/makeTimeOptions';
import FormDescription from './FormDescription';

const FormTime = ({ departTime, setDepartTime }) => {
	const times = makeTimeOptions();

	return (
		<div>
			<FormDescription type={'TIME'} />
			<select onChange={(e) => setDepartTime(e.target.value)} id='time'>
				{times.map((item, index) => {
					return (
						<option selected={departTime === item ? true : false} key={index}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default FormTime;
