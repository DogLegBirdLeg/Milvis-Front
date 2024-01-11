export const makeTimeOptions = () => {
	const times = [];

	for (let time = 6; time < 24; time++) {
		const newTime = String(time).padStart(2, '0');
		times.push(newTime);
	}

	return times;
};
