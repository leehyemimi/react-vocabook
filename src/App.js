import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Day from "./components/Day";
import Daylist from "./components/Daylist";
import Notpage from "./components/Notpage";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";


function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="*" element={<Notpage />} />
				<Route path="/" element={<Daylist />} />
				<Route path="/day/:day" element={<Day />} />
				<Route path="/create_word" element={<CreateWord />} />
				<Route path="/create_day" element={<CreateDay />} />
			</Routes>
		</div>
	);
}

export default App;
