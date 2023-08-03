import React from 'react';
import { TRAIN_OPTION } from 'utils/Constant';

function ResultHeader({ type }) {
  return (
    <div className='header-time-table'>
      <div>
        {type === TRAIN_OPTION.DEPART_ENG
          ? TRAIN_OPTION.BUS
          : TRAIN_OPTION.TRAIN}
      </div>
      <div>
        {type === TRAIN_OPTION.DEPART_ENG
          ? TRAIN_OPTION.TRAIN
          : TRAIN_OPTION.BUS}
      </div>
    </div>
  );
}
export default ResultHeader;
