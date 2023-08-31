import { useEffect, useState } from 'react';
import { ArrowDownUp } from 'react-bootstrap-icons';
import DestinationInfoItem from './DestinationInfoItem';

function DestinationInfo({
	startPoint = '부산대학교',
	destinationPoint = '부산대학교',
	setLoading,
}) {
	const [reverseFlag, setReverseFlag] = useState(false);
	const [arrowButtonSize, setArrowButtonsSize] = useState(window.innerWidth >= 768 ? 20 : 30);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setArrowButtonsSize(window.innerWidth > 768 ? 20 : 30);
		})

		return () => {
			window.removeEventListener('resize', setArrowButtonsSize);
		}
	}, [setArrowButtonsSize]);

	const searchRoadFind = async () => {
		setLoading(true);
		const findData = await fetch('');
		// 방향, 위도, 경로, 담아서 route 이동하기
		// 데이터 받아오는 동안 loading 처리
		setLoading(false);
	};
	return (
		<div className='destination-info-container'>
			<div
				onClick={() => {
					setReverseFlag(!reverseFlag);
				}}
				className='destination-info__reverse-button-container'>
				<div className='destination-info__icon-container'>
					<ArrowDownUp size={arrowButtonSize} color='balck'/>
				</div>
			</div>
			<div className='destination-info__form'>
				<div className='destination-info__item-container'>
					<DestinationInfoItem
						title={reverseFlag === false ? '출발지' : '도착지'}
						location={reverseFlag === false ? startPoint : destinationPoint}
					/>
					<DestinationInfoItem
						title={reverseFlag ? '출발지' : '도착지'}
						location={reverseFlag ? startPoint : destinationPoint}
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