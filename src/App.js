import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'components/Common/Header/index';
import MainPage from 'pages/MainPage';
import Transfer from 'pages/Transfer';
import TransferResult from 'pages/TransferResult';
import BusSchedulePage from 'pages/BusSchedulePage';

function App() {
	return (
		<div id='App'>
			<div className='main-container'>
				<Router>
					<Header />
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/train' element={<Transfer />} />
						<Route path='/train/time-table' element={<TransferResult />} />
						<Route path='/bus' element={<BusSchedulePage />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
