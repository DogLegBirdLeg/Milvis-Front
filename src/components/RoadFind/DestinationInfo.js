import { useState } from 'react';
import { ArrowDownUp } from 'react-bootstrap-icons';
import DestinationInfoItem from './DestinationInfoItem';

function DestinationInfo({
	startPoint = '부산대학교',
	destinationPoint = '부산대학교',
}) {
	const [reverseFlag, setReverseFlag] = useState(false);

	return (
		<div className='destination-info-container'>
			<div className='destination-info__reverse-button-container'>
				<div className='destination-info__icon-container'>
					<ArrowDownUp size={30} color='balck'/>
				</div>
			</div>
			<div className='destination-info-item-container'>
				<DestinationInfoItem
					title={reverseFlag === false ? '출발지' : '도착지'}
					location={reverseFlag ? startPoint : destinationPoint}
				/>
				<DestinationInfoItem
					title={reverseFlag ? '출발지' : '도착지'}
					location={reverseFlag ? destinationPoint : startPoint}
				/>
			</div>
		</div>
	);
}

export default DestinationInfo;
