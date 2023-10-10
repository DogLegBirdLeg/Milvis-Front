import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowDownUp } from 'react-bootstrap-icons';

import { MAP_OPTIONS } from 'utils/Constant';
import DestinationInfoItem from './DestinationInfoItem';

function DestinationInfo({
	basePlace = '부산대학교 밀양캠퍼스',
	userPlace = '부산대학교 밀양캠퍼스',
	userLatLng,
}) {
	const navigate = useNavigate();
	const { INIT_PLACE, MAP_INIT_LAT, MAP_INIT_LNG } = MAP_OPTIONS;
	const [toSchool, setToSchool] = useState(false);
	const [arrowButtonSize, setArrowButtonsSize] = useState(
		window.innerWidth >= 768 ? 20 : 30
	);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setArrowButtonsSize(window.innerWidth > 768 ? 20 : 30);
		});

		return () => {
			window.removeEventListener('resize', setArrowButtonsSize);
		};
	}, [setArrowButtonsSize]);

	const searchRoadFind = () => {
		navigate('/road-find-result', {
			state: {
				toSchool,
				departPlace: {
					placeName: toSchool ? userPlace : INIT_PLACE,
					lat: toSchool ? userLatLng.lat : MAP_INIT_LAT,
					lng: toSchool ? userLatLng.lng : MAP_INIT_LNG,
				},
				arrivePlace: {
					placeName: toSchool ? INIT_PLACE : userPlace,
					lat: toSchool ? MAP_INIT_LAT : userLatLng.lat,
					lng: toSchool ? MAP_INIT_LNG : userLatLng.lng,
				},
			},
		});
	};
	return (
		<div className='destination-info-container'>
			<div
				onClick={() => {
					setToSchool(!toSchool);
				}}
				className='destination-info__reverse-button-container'>
				<div className='destination-info__icon-container'>
					<ArrowDownUp size={arrowButtonSize} color='balck' />
				</div>
			</div>
			<div className='destination-info__form'>
				<div className='destination-info__item-container'>
					<DestinationInfoItem
						title={toSchool === false ? '출발지' : '도착지'}
						location={toSchool === false ? basePlace : userPlace}
					/>
					<DestinationInfoItem
						title={toSchool ? '출발지' : '도착지'}
						location={toSchool ? basePlace : userPlace}
					/>
				</div>
				<div className='destination-info__button-container'>
					<button onClick={searchRoadFind}>검색</button>
				</div>
			</div>
		</div>
	);
}

export default DestinationInfo;
