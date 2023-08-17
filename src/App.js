import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'components/Common/Header/Header';
import MainPage from 'pages/MainPage';
import TransferPage from 'pages/TransferPage';
import TransferResultPage from 'pages/TransferResultPage';
import RoadFindPage from 'pages/RoadFindPage';
import RoadFindResultPage from 'pages/RoadFindResultPage';
import BusSchedulePage from 'pages/BusSchedulePage';

function App() {
  return (
    <div id='App'>
      <div className='main-container'>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route exact path='/train' element={<TransferPage />} />
            <Route
              exact
              path='/train/time-table'
              element={<TransferResultPage />}
            />
            <Route exact path='/map' element={<RoadFindPage />} />
            <Route
              exact
              path='/map/:lat/:lng/:showCate'
              element={<RoadFindResultPage />}
            />
            <Route exact path='/bus' element={<BusSchedulePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
