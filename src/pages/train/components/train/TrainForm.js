import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
import Button from "components/common/Button";
import getStationCode from 'utils/train/getStationCode';
import makeStandardData from 'utils/train/makeStandardData';
import { FUNC1_BUS_DATE_URL, FUNC1_TRAIN_DATA_URL } from 'API/API_URL';
import StationSearch from "./StationSearch";

// TODO: 상수 변수로 바꿔주기
function TrainForm({setLoading}) {
  const navigate = useNavigate();
  const [departStation, setDepartStation] = useState("밀양");
  const [arriveStation, setArriveStation] = useState("부산");

  // TODO: submit 시 로딩 띄우기 
  const onSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const isDepart = departStation === '밀양' ? true : false;
    const [departCode, arriveCode] = getStationCodes(isDepart);
    const dateInput = document.querySelector('#date');
    const timeInput = document.querySelector('#time');
    const [trainDate, busDate] = getDepartDate(dateInput, timeInput);
    const data = {
      type: isDepart ? 'depart' : 'arrive',
      departStation: departStation,
      arriveStation: arriveStation,
      date: dateInput.value.split('-'),
      time: timeInput.value
    };
    const busObject = {
      'direction': isDepart ? '밀양역' : '부산대',
      'dep_datetime': busDate
    }
    const trainObject = {
      'dep_station_code': departCode,
      'arr_station_code': arriveCode,
      'dep_date': trainDate
    }
    const busQuery = new URLSearchParams(busObject).toString();
    const trainQuery = new URLSearchParams(trainObject).toString();
    const busData = await getBusData(busQuery);
    const trainData = await getTrainData(trainQuery);

    if (busData.length !== 0 && trainData.length !== 0) {
      makeStandardData(data, busData, trainData);
    }

    navigate('/train/time-table', {
      state: data
    });
  }

  const getBusData = async(busQuery) => {
    try {
      const response = await fetch(FUNC1_BUS_DATE_URL + busQuery);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch(e) {
      console.log(e);
    }
  }

  const getTrainData = async(trainQuery) => {
    try {
      const response = await fetch(FUNC1_TRAIN_DATA_URL + trainQuery);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch(e) {
      console.log(e);
    } 
  }

  // 기차역 코드 반환
  const getStationCodes = (isDepart) => {
    const miryangCode = 'NAT013841';
    const anotherStationCode =
    isDepart
    ? getStationCode(arriveStation) 
    : getStationCode(departStation);

    return (
      isDepart ?
      [miryangCode, anotherStationCode] :
      [anotherStationCode, miryangCode]
    )
  }

  // 유저가 입력한 출발시간 받기 
  const getDepartDate = (dateInput, timeInput) => {
    const trainDate = dateInput.value.split('-').join('');
    const busDate = trainDate + timeInput.value + '0000';

    return [trainDate, busDate];
  }

  const makeDisableButton = () => {
    if (departStation === arriveStation) {
      return true;
    }

    return false;
  }

  return (
    <div className="form-container">
      <form onSubmit={(e) => onSubmit(e)}>
        <SelectDate />
        <SelectTime />
        <StationSearch
          departStation={departStation}
          arriveStation={arriveStation}
          setDepartStation={setDepartStation}
          setArriveStation={setArriveStation}
        />
        <Button
          type={"submit"}
          buttonsize={"search-button"}
          content={"시간표 조회하기"}
          disable={makeDisableButton()}
        />
      </form>
    </div>
  );
}

export default TrainForm;
