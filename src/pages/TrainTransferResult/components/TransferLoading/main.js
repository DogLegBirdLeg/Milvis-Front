import Loading from 'components/Loading';

function TransferLoading() {
	return (
		<div className='container-loading'>
			<span>{`잠시만 기다려주세요.\n환승 기차 시간표를 검색중입니다...`}</span>
			<Loading />
		</div>
	);
}

export default TransferLoading;
