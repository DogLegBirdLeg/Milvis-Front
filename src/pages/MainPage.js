import React from 'react';
import { Link } from 'react-router-dom';

import 'styles/main-page/main-page.css';
import Button from 'components/Common/Button';
import { SLIDE_INFO } from 'utils/Constant';
import SlideCard from 'components/MainPage/SlideCard';

const MainPage = () => {
	const { DETAILS } = SLIDE_INFO;

	function SlideList({ status, link, content }) {
		return (
			<li className='main-page__slide-item'>
				<SlideCard status={status} />
				<div className='main-page__slide-item-button-container'>
					<Link to={link}>
						<Button buttonSize={'button-slide'} content={content} />
					</Link>
				</div>
			</li>
		);
	}

	return (
		<div className='main-page'>
			<ul className='main-page__slide-list'>
				{DETAILS.map((e, i) => {
					return (
						<SlideList
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
