import React from 'react'
import Loading from 'components/common/Loading'

function TransferLoading() {
  return (
    <div className='container-loading'>
      <span>
        잠시만 기다려주세요.
      </span>
      <Loading />
    </div>

  )
}

export default TransferLoading