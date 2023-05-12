import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import SelectDepart from './SelectDepart';
import StationSearch from "./StationSearch";
import Button from "components/common/Button";
import submitForm from 'feature/train/SubmitForm';

function TrainForm({setLoading}) {
  const navigate = useNavigate();
  const [departDate, setDepartDate] = useState(new Date().toISOString().split('T')[0]);
  const [departTime, setDepartTime] = useState('06');
  const [departStation, setDepartStation] = useState("밀양");
  const [arriveStation, setArriveStation] = useState("부산");

  const onSubmit = async(e) => {
    const submitData = {
      departDate,
      departTime,
      departStation,
      arriveStation
    };
    e.preventDefault();
    setLoading(true);

    const data = await submitForm(submitData);

    navigate('/train/time-table', {
      state: data
    });
  }

  const makeDisableButton = () => {
    if (departStation === arriveStation) {
      return true;
    }

    return false;
  }

  return (
    <div className="container-form">
      <form onSubmit={(e) => onSubmit(e)}>
        <SelectDepart 
          departDate={departDate}
          departTime={departTime}
          setDepartDate={setDepartDate}
          setDepartTime={setDepartTime}
        />
        <StationSearch
          departStation={departStation}
          arriveStation={arriveStation}
          setDepartStation={setDepartStation}
          setArriveStation={setArriveStation}
        />
        <Button
          type={"submit"}
          buttonSize={"button-train"}
          content={"시간표 조회하기"}
          disable={makeDisableButton()}
        />
      </form>
    </div>
  );
}

export default TrainForm;
