const { API_END_POINT } = process.env.REACT_APP;

export const getBusArriveTime = async (direction, latitude, longitude) => {
	const url = `${API_END_POINT}/path`;
	const queries = new URLSearchParams({ direction, latitude, longitude });

	const response = await fetch(`${url}?${queries}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response.json();
};
