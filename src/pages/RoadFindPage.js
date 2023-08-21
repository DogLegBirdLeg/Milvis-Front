import 'styles/road-find-page/road-find-page.css';
import Map from 'components/RoadFind/Map';
import DestinationInfo from 'components/RoadFind/DestinationInfo';
import { useState } from 'react';

function RoadFindPage() {
  const [userLoacation, setUserLocation] = useState();

  return (
    <div className='road-find-page'>
      <Map />
      <DestinationInfo startPoint={'부산대학교'} />
    </div>
  )
}

export default RoadFindPage;
