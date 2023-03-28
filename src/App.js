import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "components/common/Header";
import Main from "pages/Main";
import Train from "pages/train/page/Train"
import TrainResult from "pages/train/page/TrainResult";
import Map from "pages/busFind/Map";
import Bus from "pages/busTime/Bus";
import SearchingRoad from "./pages/busFind/SearchingRoad";
import BusFindResult from "pages/busFind/BusFindResult";
import SearchingRoad from "pages/busFind/SearchingRoad";

function App() {
  return (
    <div id="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/train" element={<Train />}/>
          <Route exact path="/train/time-table" element={<TrainResult />} />
          <Route exact path="/map" element={<Map />}/>
          <Route exact path="/map/:lat/:lng/:showCate" element={<SearchingRoad />} />
          <Route exact path="/BusFindResult" element={<BusFindResult />} /> {/*기능2 결과페이지*/}
          <Route exact path="/bus/:date" element={<Bus />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
