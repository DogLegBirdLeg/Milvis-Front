import 'styles/road-find-page/road-find-page.css';
import Map from 'components/RoadFind/Map';
import DestinationInfo from 'components/RoadFind/DestinationInfo';
import { useState } from 'react';
import Loading from 'components/Common/Loading';

function RoadFindPage() {
	const [loading, setLoading] = useState(false);
	const [userLocation, setUserLocation] = useState('부산대학교');
	return (
		<div className='road-find-page'>
			{loading && <Loading />}
			<Map userLocation={userLocation} setUserLocation={setUserLocation} />
			<div className='destination-info'>
				<DestinationInfo
					startPoint={'부산대학교'}
					destinationPoint={userLocation}
					setLoading={setLoading}
				/>
			</div>
		</div>
	);
}

export default RoadFindPage;
