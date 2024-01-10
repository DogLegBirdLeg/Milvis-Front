export function calMaxDate() {
	const today = new Date();
	const day = today.getDate();
	const month = today.getMonth();
	const year = today.getFullYear();
	const endDt = new Date(year, month, day + 31).toISOString().split('T')[0];

	return endDt;
}
