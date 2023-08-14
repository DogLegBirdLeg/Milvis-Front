import React from 'react'

function Pagination({n, page, setPage, delay=undefined}) {
  const item = [...new Array(n)].fill((_, i) => i);

  function clickPagination(e) {
    if (delay !== undefined) {
      delay();
    }
    const {index} = e.target.dataset;
    setPage((curr) => {
      curr = Number(index);
      return curr;
    });
  }

  function Circle({index}) {
    return (
      <div
        data-index={index}
        className={page === index ? 'select' : ''}
        onClick={(e) => clickPagination(e)}
      >
      </div>
    )
  }

  return (
    <div className='pagination'>
      {item.map((_, i) => {
        return <Circle key={i} index={i}/>
      })}
    </div>
  )
}

export default Pagination