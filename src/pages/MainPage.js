import 'styles/main-page/main-page.css';
import { SLIDE_INFO } from 'utils/Constant';
import CardList from 'components/MainPage/CardList';

const MainPage = () => {
	const { DETAILS } = SLIDE_INFO;

	return (
		<div className='main-page'>
			<ul className='main-page__slide-list'>
				{DETAILS.map((e, i) => {
					return (
						<CardList
							key={i}
							status={e.status}
							link={e.link}
							content={e.content}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default MainPage;
