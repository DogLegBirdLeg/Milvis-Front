function DestinationInfoItem({ title, location }) {
	return (
		<div className='destination-info-item'>
			<div className='destination-info-item__title'>{title}</div>
			<div className='destination-info-item__location'>{location}</div>
		</div>
	);
}

export default DestinationInfoItem;
