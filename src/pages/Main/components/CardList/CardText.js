import transferImg from 'assets/images/train_chien_woman.png';
import busTimeImg from 'assets/images/smartphone_map_app_man.png';

function CardText({ type }) {
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
			{type === 0 ? <Card1Text /> : ''}
			{type === 1 ? <Card3Text /> : ''}
		</>
	);
}

export default CardText;
