import React, { useState, useCallback } from 'react'
import STATIONS from 'API/Station';
import StationToggleHandler from 'feature/train/StationToggleHandler';
import InputHandler from 'feature/train/InputHandler';

function TransferStationForm({departStation, arriveStation, setDepartStation, setArriveStation}) {
  const [departToggle, setDepartToggle] = useState(false);
  const [arriveToggle, setArriveToggle] = useState(false);
  const [stationLists, setStationLists] = useState([]);
  const [value, setValue] = useState('');
  const inputHandler = new InputHandler(setValue);
  const stationToggleHandler = new StationToggleHandler(
    departToggle,
    arriveToggle,
    setDepartToggle, 
    setArriveToggle,
  );

  // * event: reverse-arrow 
  const clickReverseArrow = () => {
    const depart = departStation;
    const arrive = arriveStation;

    setDepartStation((curr) => {
      curr = arrive;
      return curr;
    });

    setArriveStation((curr) => {
      curr = depart;
      return curr;
    })
  }

  // * Station Handler
  const setMilyang = (value) => {
    if (departToggle) {
      if (value !== "밀양") {
        setArriveStation("밀양");
      } 
    } 
    
    if (arriveToggle) {
      if (value !== "밀양") {
        setDepartStation("밀양");
      }
    }
  }

  const changeDepartStation = (station) => {
    setDepartStation((curr) => {
      curr = station;
      return curr;
    })
    setMilyang(value);
    stationToggleHandler.closeDepartToggle();
  }

  const changeArriveStation = (station) => {
    setArriveStation((curr) => {
      curr = station;
      return curr;
    })
    setMilyang(value);
    stationToggleHandler.closeArriveTogle();
  }

  // * event: click li
  const clickLists = (e) => {
    const station = e.target.innerText;

    if (departToggle) {
      changeDepartStation(station);
    }
    if (arriveToggle) {
      changeArriveStation(station);
    }
    setStationLists((curr) => {
      curr = [];
      return curr;
    })
  }

  // * make List
  const debounceSearchFunction = (callback, time) => {
    let timer = undefined;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), time);
    }
  }

  const compareLists = (station, value) => { // input value 가 있는 역 검사
    value = '^' + value;
    const reg = new RegExp(value);

    return reg.test(station) ? true : false;
  }

  const makeStationLists = (value) => {
    const nextStationLists = [];

    STATIONS.forEach((station) => { 
      if (compareLists(station, value)) {
        nextStationLists.push(station);
      }
    })

    nextStationLists.sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    });
    
    setStationLists((curr) => {
      curr = nextStationLists;
      return curr;
    })
  }

  const findSameKeywordStation = useCallback(
    debounceSearchFunction((value) => makeStationLists(value), 250),
    []
  )

  // * onKeyUp event
  const searchStationLists = (e) => {
    if (e.target.value !== '') {
      findSameKeywordStation(e.target.value);
    }
  }

  // * components
  const StationSearchHeader = () => {
    return (
      <header>
        <div>출발</div>
        <div className="reverse-arrow" onClick={clickReverseArrow}>←→</div>
        <div>도착</div>
      </header>
    )
  }

  const StationLists = () => {
    return (
      <ul id="search-station-ul">
      {stationLists.map((element, index) => {
        return (
        <li 
        className='search-station-li'
        key={index}
        onClick={(e) => clickLists(e)}>
        {element}
        </li>
        )})}
    </ul>
    )
  }

  const Station = () => {
    return (
      <div className='container-stations'>
        <div
        className={departToggle === true ? 'focus depart-station' : 'depart-station'}
        onClick={(e) => {
          stationToggleHandler.setDepartStationSearchBar(e);
          inputHandler.initInputValue();
        }}>
          <span>{departStation}</span>
        </div>
        <div
        className={arriveToggle === true ? 'focus arrive-station' : 'arrive-station'}
        onClick={(e) => {
          stationToggleHandler.setArriveStationSearchBar(e);
          inputHandler.initInputValue();
        }}>
          <span>{arriveStation}</span>
        </div>
      </div>
    )
  }

  // ! input을 Component로 만들어 return 하게 되면 새 input이 만들어진다.
  return (
    <div className='container-station-input'>
      <StationSearchHeader />
      <Station />
      <input
      value={value}
      onChange={(e) => inputHandler.changeDepartStationInput(e)}
      onKeyUp={searchStationLists}
      placeholder='찾고 싶은 역을 검색해보세요.'
      className={departToggle === true ? '' : 'hidden-bar'}
      />
      <input
      value={value}
      onChange={(e) => inputHandler.changeArriveStationInput(e)}
      onKeyUp={searchStationLists}
      placeholder='찾고 싶은 역을 검색해보세요.'
      className={arriveToggle === true ? '' : 'hidden-bar'}
      />
      <StationLists />
    </div>
  )
}

export default TransferStationForm