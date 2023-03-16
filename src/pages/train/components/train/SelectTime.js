import ExplainTrainOption from "./ExplainTrainOption";
import { TRAIN_OPTION, TRAIN_OPTION_EXPLAIN } from 'utils/Constant';
import { timeCalculator } from "utils/train/TimeCalculator";

function SelectTime() {
  const times = timeCalculator.makeTimeOptions();

  return (
    <div className="time-input-container">
      <ExplainTrainOption
      title={TRAIN_OPTION.TIME}
      explain={TRAIN_OPTION_EXPLAIN.TIME}
      />
      <select id="time">
        <optgroup className="time-options">
          {times.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </optgroup>
      </select>
    </div>
  );
}

export default SelectTime;
