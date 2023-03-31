import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
import StationSearch from "./StationSearch";
import Button from "components/common/Button";
import getStationCode from 'utils/train/getStationCode';
import makeStandardData from 'utils/train/makeStandardData';
import { FUNC1_BUS_DATE_URL, FUNC1_TRAIN_DATA_URL } from 'API/API_URL';

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
      'depart_datetime': busDate
    }
    const busQuery = new URLSearchParams(busObject).toString();
    const busData = await getBusData(busQuery);

    const trainObject = {
      'depart_station_code': departCode,
      'arrive_station_code': arriveCode,
      'depart_date': trainDate
    }
    const trainQuery = new URLSearchParams(trainObject).toString();
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

  /**
   * 출발 기차역과 도착 기차역의 코드를 반환하는 함수
   */
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

  /**
   * 유저가 입력한 출발 시간을 데이터 형식에 맞게 반환하는 함수 
   * @param {*} dateInput 
   * @param {*} timeInput 
   * @returns 
   */
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
