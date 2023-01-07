import { Route, Routes } from "react-router-dom";
import './App.css';
import Day from "./component/Day";
import Daylist from "./component/Daylist";
import Header from "./component/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Daylist />} />
				<Route path="/day/:id" element={<Day />} />
			</Routes>
		</div>
	);
}

export default App;
