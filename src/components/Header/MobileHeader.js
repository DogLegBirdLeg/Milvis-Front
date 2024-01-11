import { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, XLg } from 'react-bootstrap-icons';

function MobileHeader() {
	const [openFlag, setOpenFlag] = useState(false);

	function openSideBar() {
		setOpenFlag((current) => {
			current = true;
			return current;
		});
	}

	function closeSideBar() {
		setOpenFlag((current) => {
			current = false;
			return current;
		});
	}

	function SideBarIcon() {
		return (
			<div className='nav-icon'>
				<List onClick={() => openSideBar()} size='50px' cursor='pointer' />
			</div>
		);
	}

	function SideBar() {
		return (
			<div className='side-bar'>
				<XLg
					className='side-bar-li'
					onClick={() => closeSideBar()}
					size='30px'
					cursor='pointer'
				/>
				<SlideBarList content={'열차 환승 시간표'} page={'/train'} />
				<SlideBarList content={'기존 시간표'} page={'/bus'} />
			</div>
		);
	}

	function SlideBarList({ content, page }) {
		return (
			<div className='side-bar-li'>
				<Link
					onClick={(_) => closeSideBar()}
					to={page}
					style={{
						textDecoration: 'none',
						color: 'white',
					}}>
					<span>{content}</span>
				</Link>
			</div>
		);
	}

	return (
		<>
			<SideBarIcon />
			{openFlag === true ? <SideBar /> : <></>}
		</>
	);
}

export default MobileHeader;
