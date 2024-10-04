function TimeCardItem({ cardClassName, type, name, departTime, arriveTime }) {
	return (
		<div className={`container-card ${cardClassName}`}>
			<div className='depart-section'>
				{type === 'depart-card' && (
					<div className='card'>
						<div className='card-name'>{name}</div>
						<div className='card-time'>
							{departTime} - <span className='point'>{arriveTime}</span>
						</div>
					</div>
				)}
			</div>
			<div className='point-circle'></div>
			<div className='arrive-section'>
				{type === 'arrive-card' && (
					<div className='card'>
						<div className='card-name'>{name}</div>
						<div className='card-time'>
							<span className='point'>{departTime}</span> - {arriveTime}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default TimeCardItem;
