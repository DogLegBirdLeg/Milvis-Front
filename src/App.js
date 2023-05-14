import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "components/common/Header/Header";
import Main from "pages/main/Main";
import Train from "pages/train/Train"
import TrainResult from "pages/train/trainResult/TrainResult";
import Map from "pages/roadFind/Map";
import Bus from "pages/busTime/Bus";
import BusResult from "pages/roadFind/result/BusResult";

function App() {
  return (
    <div id="App">
      <div className="main-container">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />}/>
            <Route exact path="/train" element={<Train />}/>
            <Route exact path="/train/time-table" element={<TrainResult />} />
            <Route exact path="/map" element={<Map />}/>
            <Route exact path="/map/:lat/:lng/:showCate" element={<BusResult />} />
            <Route exact path="/bus/:date" element={<Bus />}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
