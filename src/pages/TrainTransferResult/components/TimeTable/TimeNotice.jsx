function TimeNotice({ time, prevTime }) {
	return (
		<div
			className={`circle-time ${prevTime ? 'prev-time' : ''}`}
			id={`${time}time`}>
			{Number(time)}
		</div>
	);
}

export default TimeNotice;
