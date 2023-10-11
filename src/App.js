import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'components/Common/Header/index';
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
						<Route path='/' element={<MainPage />} />
						<Route path='/train' element={<TransferPage />} />
						<Route path='/train/time-table' element={<TransferResultPage />} />
						<Route path='/map' element={<RoadFindPage />} />
						<Route path='/road-find-result' element={<RoadFindResultPage />} />
						<Route path='/bus' element={<BusSchedulePage />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
