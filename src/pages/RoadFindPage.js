import 'styles/road-find-page/road-find-page.css';
import Map from 'components/RoadFind/Map';
import DestinationInfo from 'components/RoadFind/DestinationInfo';
import { useState } from 'react';

function RoadFindPage() {
  const [userLocation, setUserLocation] = useState('부산대학교');
  return (
    <div className='road-find-page'>
      <Map userLocation={userLocation} setUserLocation={setUserLocation} />
      <DestinationInfo startPoint={'부산대학교'} destinationPoint={userLocation} />
    </div>
  )
}

export default RoadFindPage;
