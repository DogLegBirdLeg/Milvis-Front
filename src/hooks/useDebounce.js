import { useCallback, useEffect, useRef } from 'react';

const useDebounce = (time) => {
	const timer = useRef(null);

	const run = (fn) => {
		timer.current && clearTimeout(timer.current);
		timer.current = setTimeout(() => {
			fn();
		}, time);
	};

	const clearTimer = useCallback(() => {
		timer.current && clearTimer(timer.current);
	}, []);

	useEffect(() => {
		return () => clearTimer;
	}, [clearTimer]);

	return {
		run,
	};
};

export default useDebounce;
