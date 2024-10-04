import FormDescription from './FormDescription';

function FormBusType({ setBusType }) {
	return (
		<div>
			<FormDescription type={'BUS'} />
			<select
				onChange={(e) => {
					setBusType(e.target.value);
				}}>
				<option>평일</option>
				<option>주말 & 공휴일</option>
				<option>대학 방학</option>
			</select>
		</div>
	);
}

export default FormBusType;
