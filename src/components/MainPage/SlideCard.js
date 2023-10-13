import transferImg from 'assets/train_chien_woman.png';
import roadFindImg from 'assets/map_open.png';
import busTimeImg from 'assets/smartphone_map_app_man.png';

function SlideCard({ status }) {
	function Card1Text() {
		return (
			<div className='main-page__slide-info'>
				<div className='main-page__slide-info-img-container'>
					<img src={transferImg} alt='밀양 시간표 비교 이미지' />
				</div>
				<div className='main-page__slide-info-text'>
					<div className='main-page__slide-point-texts'>
						<p>기차, 버스</p>
						<p className='point'>시간표 비교</p>
						<p>번거롭지 않으세요?</p>
					</div>
					<p>열차와 버스 시간표를 한 번에 조회해보세요.</p>
				</div>
			</div>
		);
	}

	function Card2Text() {
		return (
			<div className='main-page__slide-info'>
				<div className='main-page__slide-info-img-container'>
					<img src={roadFindImg} alt='밀양 길찾기 이미지' />
				</div>
				<div className='main-page__slide-info-text'>
					<div className='main-page__slide-point-texts'>
						<p className='point'>밀양시내,</p>
						<p>알려드릴게요</p>
					</div>
					<p>
						목적지에서
						<br />
						가장 가까운 정류장을 알려드려요.
					</p>
				</div>
			</div>
		);
	}

	function Card3Text() {
		return (
			<div className='main-page__slide-info'>
				<div className='main-page__slide-info-img-container'>
					<img src={busTimeImg} alt='밀양 버스 시간표 확인 이미지' />
				</div>
				<div className='main-page__slide-info-text'>
					<div className='main-page__slide-point-texts'>
						<p>
							기존 <span className='point'>버스 시간표</span>
						</p>
						<p>를 찾고 계신가요?</p>
					</div>
					<p>
						더 직관적인
						<br />
						시간표를 통해 한 눈에 확인해보세요.
					</p>
				</div>
			</div>
		);
	}

	return (
		<>
			{status === 0 ? <Card1Text /> : ''}
			{status === 1 ? <Card2Text /> : ''}
			{status === 2 ? <Card3Text /> : ''}
		</>
	);
}

export default SlideCard;
