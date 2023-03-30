import React from 'react'
import { useLocation, useParams } from 'react-router';


function BusInfo({page, setPage, data}) {
  const Pagination = () => {
    return (
      <div id="bus-pagination" className='pagination'>
        <div
        data-index = {0}
        className={page === 0 ? 'select' : ''}
        onClick={(e) => clickPagination(e)}></div>
        <div 
        data-index = {1}
        className={page === 1 ? 'select' : ''}
        onClick={(e) => clickPagination(e)}></div>
        <div
        data-index = {2}
        className={page === 2 ? 'select' : ''}
        onClick={(e) => clickPagination(e)}></div>
      </div>
    )
  }

  const clickPagination = (e) => {
    const {index} = e.target.dataset;
    setPage(Number(index));
  }

  console.log(data);
  return (
    <div className='bus-info-container'>
      <div className="date_time_info">
        {data.date} {data.time}
      </div>
      <div className="div-line"></div>
      <div className="info-content">

      </div>
      <Pagination />
    </div>
  )
}

export default BusInfo