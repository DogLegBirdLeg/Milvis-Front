import 'styles/main-page/main-page.css';
import { SLIDE_INFO } from 'utils/Constant';
import CardItem from './components/CardList/main';

const MainPage = () => {
	const { DETAILS } = SLIDE_INFO;

	return (
		<div className='main-page'>
			<ul className='main-page__slide-list'>
				{DETAILS.map((e, i) => {
					return (
						<CardItem key={i} type={e.type} link={e.link} content={e.content} />
					);
				})}
			</ul>
		</div>
	);
};

export default MainPage;
