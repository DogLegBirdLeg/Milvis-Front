const FormStationsLists = ({ stationLists, handleChangeStation }) => {
	return (
		<ul id='search-station-ul' onClick={(event) => handleChangeStation(event)}>
			{stationLists.map((element, index) => {
				return (
					<li className='search-station-li' key={index}>
						{element}
					</li>
				);
			})}
		</ul>
	);
};

export default FormStationsLists;
