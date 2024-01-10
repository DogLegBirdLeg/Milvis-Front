import { Link } from 'react-router-dom';
import CardText from './CardText';
import Button from 'components/Common/Button';

function CardItem({ type, link, content }) {
	return (
		<li className='main-page__slide-item'>
			<CardText type={type} />
			<div className='main-page__slide-item-button-container'>
				<Link to={link}>
					<Button size={'middle'}>{content}</Button>
				</Link>
			</div>
		</li>
	);
}

export default CardItem;
