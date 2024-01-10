import { Link } from 'react-router-dom';
import SlideCard from 'components/MainPage/SlideCard';
import Button from 'components/Common/Button';

function CardList({ status, link, content }) {
	return (
		<li className='main-page__slide-item'>
			<SlideCard status={status} />
			<div className='main-page__slide-item-button-container'>
				<Link to={link}>
					<Button size={'middle'}>{content}</Button>
				</Link>
			</div>
		</li>
	);
}

export default CardList;
