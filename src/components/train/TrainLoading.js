import Loading from 'components/common/Loading'
import React from 'react'

function TrainLoading() {
  return (
    <div className='container-loading'>
      <span>
        잠시만 기다려주세요.
      </span>
      <Loading />
    </div>

  )
}

export default TrainLoading