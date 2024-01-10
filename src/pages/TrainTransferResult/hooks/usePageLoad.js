import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';
import submitForm from 'utils/train/SubmitForm';

function usePageLoad() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const [data, setData] = useState(undefined);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	if (state === null) {
		alert('올바른 경로로 접근해주세요.');
		navigate('/train');
	}
	const { submitData } = state;

	const handleLoadWindow = useCallback(async () => {
		try {
			const data = await submitForm(submitData);

			setData(data);
		} catch (error) {
			setError(true);
		}
	}, []);

	useEffect(() => {
		if (error) {
			alert('서버에서 데이터를 받아오지 못했습니다. 다시 시도해주세요.');
			navigate('/train');
		}
	}, [error]);

	useEffect(() => {
		handleLoadWindow();
	}, [handleLoadWindow]);

	useEffect(() => {
		if (data) setLoading(false);
	}, [data]);

	return {
		states: {
			data,
			loading,
			error,
		},
	};
}

export default usePageLoad;
