import { Link } from 'react-router-dom';

function PCHeader() {
	function NavBarList({ content, page }) {
		return (
			<Link
				className='side-bar-li'
				to={page}
				style={{
					textDecoration: 'none',
					color: 'white',
				}}>
				<span>{content}</span>
			</Link>
		);
	}

	return (
		<div className='nav-bar'>
			<NavBarList content={'환승 시간표'} page={'/train'} />
			<NavBarList content={'버스 시간표'} page={'/bus'} />
		</div>
	);
}

export default PCHeader;
