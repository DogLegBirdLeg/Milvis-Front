import { makeTimeOptions } from 'utils/FormTimeHandler';
import FormDescription from './FormDescription';

const FormTime = ({ departTime, setDepartTime }) => {
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

export default FormTime;
