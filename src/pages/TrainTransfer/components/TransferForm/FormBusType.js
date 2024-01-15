import FormDescription from './FormDescription';

function FormBusType() {
	return (
		<div>
			<FormDescription type={'BUS'} />
			<select>
				<option>평일</option>
				<option>주말 & 공휴일</option>
				<option>대학 방학</option>
				<option>중, 고등학교 & 대학 방학</option>
			</select>
		</div>
	);
}

export default FormBusType;
