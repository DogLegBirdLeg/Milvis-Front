const { default: makeStandardData } = require('pages/train/utils/makeStandardData');

const onSubmit = (e) => {
  e.preventDefault();

  const isDepart = departStation === '밀양' ? true : false;

  const data = {
    type: isDepart ? 'depart' : 'arrive',
    departStation: departStation,
    arriveStation: arriveStation,
    date: dateInput.value.split('-'),
    time: timeInput.value
  };
  const busData = getBusData();
  const trainData = getTrainData();
  makeStandardData(data, busData, trainData);
}