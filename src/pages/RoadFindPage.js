import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'styles/road-find-page/road-find-page.css';
import RoadFindDestInfo from 'components/RoadFind/RoadFindDestInfo';
import RoadFindMap from 'components/RoadFind/RoadFindMap';

/*global kakao*/
const Map = () => {
  return (
    <>
      <RoadFindMap />
      <RoadFindDestInfo />
    </>
  );
};

export default Map;
