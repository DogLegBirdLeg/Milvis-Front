import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '@/components/organism/Header/Header';
import Main from './pages/Main/Main';
// import TrainTransfer from 'pages/TrainTransfer/main';
// import TransferResult from 'pages/TrainTransferResult/main';
// import BusSchedulePage from 'pages/BusSchedule/main';

function App() {
  return (
    <div id="App">
      <div className="main-container">
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Main />}
            />
            {/* <Route
              path='/train'
              element={<TrainTransfer />}
            />
            <Route
              path='/train/time-table'
              element={<TransferResult />}
            />
            <Route
              path='/bus'
              element={<BusSchedulePage />}
            /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
