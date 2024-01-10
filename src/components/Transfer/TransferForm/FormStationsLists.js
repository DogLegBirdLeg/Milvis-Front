const FormStationsLists = ({ stationLists, handleChangeStation }) => {
	return (
		<ul id='search-station-ul'>
			{stationLists.map((element, index) => {
				return (
					<li
						className='search-station-li'
						key={index}
						onClick={handleChangeStation}>
						{element}
					</li>
				);
			})}
		</ul>
	);
};

export default FormStationsLists;
