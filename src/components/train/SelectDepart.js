import React from 'react'

import { TRAIN_OPTION, TRAIN_OPTION_EXPLAIN } from 'utils/Constant';
import { dateCaculator, timeCalculator } from "feature/train/DateTimeHandler";

function SelectDepart({departDate, departTime, setDepartDate, setDepartTime}) {

  function ExplainTrainOption({title, explain, id}) {
    return (
      <>
        <label htmlFor={id}>{title}</label>
        <p className="small-explain">{explain}</p>
      </>
    )
  }

  function SelectDate() {
    return (
      <div className="date-input-container">
        <ExplainTrainOption 
        title={TRAIN_OPTION.DATE}
        explain={TRAIN_OPTION_EXPLAIN.DATE}
        id={"date"}
        />
        <input
        onChange={(e) => setDepartDate(e.target.value)}
        className='date-input-container'
        required
        min={dateCaculator.today}
        max={dateCaculator.calAfter1MonthDate()}
        id="date"
        value={departDate}
        type="date" />
      </div>
    );
  }

  function SelectTime() {
    const times = timeCalculator.makeTimeOptions();
  
    return (
      <div className="time-input-container">
        <ExplainTrainOption
        title={TRAIN_OPTION.TIME}
        explain={TRAIN_OPTION_EXPLAIN.TIME}
        />
        <select 
          onChange={(e) => setDepartTime(e.target.value)}
          id="time">
          <optgroup className="time-options">
            {times.map((item, index) => {
              return <option selected={departTime === item ? true : false} key={index}>{item}</option>;
            })}
          </optgroup>
        </select>
      </div>
    );
  }

  return (
    <>
      <SelectDate />
      <SelectTime />
    </>
  )
}

export default SelectDepart