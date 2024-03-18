import { useState } from 'react'
import './App.css'
import Home from './pages/Index/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

/*Homepage*/
import HeaderHome from './pages/Index/HeaderHome';
import ComputerNavigation from './components/ComputerNavigation';
import PhoneNavigation from './components/PhoneNavigation';
import Footer from './components/Footer';

/*Accessoarer*/
import HeaderAccessoarer from './pages/Accessoarer/HeaderAccessoarer';
import Accessoarer from './pages/Accessoarer/Accessoarer';

/*Skor*/
import HeaderSkor from './pages/Skor/HeaderSkor';
import Skor from './pages/Skor/Skor';

/*Hjälp*/
import HeaderHjälp from './pages/Hjälp/HeaderHjälp';
import Hjälp from './pages/Hjälp/Hjälp';

/*Villkor*/
import HeaderVillkor from './pages/Villkor/HeaderVillkor';
import ComputerVillkor from './pages/Villkor/ComputerVillkor';
import PhoneVillkor from './pages/Villkor/PhoneVillkor';

/*Om Oss*/
import HeaderOmOss from './pages/OmOss/HeaderOmOss';
import OmOss from './pages/OmOss/OmOss';

function App() {
	//const [count, setCount] = useState(0)
      
	return (
		<Router>
			{/* Startsida */}
			<ComputerNavigation/>
			<PhoneNavigation/>
			<Routes>
				<Route path='/' element={<><HeaderHome/><Home/></>}></Route>
				<Route path='/pages/Skor' element={<><HeaderSkor/><Skor/></>}></Route>
				<Route path='/pages/Accessoarer' element={<><HeaderAccessoarer/><Accessoarer/></>}></Route>
				<Route path='/pages/OmOss' element={<><HeaderOmOss/><OmOss/></>}></Route>
				<Route path='/pages/Hjälp' element={<><HeaderHjälp/><Hjälp/></>}></Route>
				<Route path='/pages/Villkor' element={<><HeaderVillkor/><ComputerVillkor/><PhoneVillkor/></>}></Route>
			</Routes>
			<Footer/>	
		</Router>
	)
}
      
export default App;