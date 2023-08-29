import React from 'react'
import 'styles/road-find-page/road-find-page.css';

const Alert = ({flag}) =>{
  return (
    <div className='map-explain'>
      {flag}
    </div>
  );
}

export default Alert;

// return(
//     <div className='map-explain'>
//         {flag}
//     </div>
// )