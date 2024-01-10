const FormStationsHeader = ({ onReverse }) => {
	return (
		<header>
			<div>출발</div>
			<div className='reverse-arrow' onClick={onReverse}>
				←→
			</div>
			<div>도착</div>
		</header>
	);
};

export default FormStationsHeader;
