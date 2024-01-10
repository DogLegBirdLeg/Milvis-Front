import { Link } from 'react-router-dom';
import Button from 'components/Common/Button';

function ResultInfo({ departStation, arriveStation, date, time }) {
	return (
		<div className='container-train-info'>
			<div className='container-data-info'>
				<h1>
					{departStation} ▸ {arriveStation}
				</h1>
				<p>
					{date[0]}년 {date[1]}월 {date[2]}일
				</p>
				<p>{time}시 출발</p>
			</div>
			<Link to='/train'>
				<Button size={'middle'}>다시 조회하기</Button>
			</Link>
		</div>
	);
}

export default ResultInfo;
