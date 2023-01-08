import { Link } from "react-router-dom";
import useFetch from "./../hooks/useFetch";

function Daylist() {
	const data = useFetch('http://localhost:3001/days');

	return (
		<ul className="list_day">
			{
				data.map(day => {
					return (
						<li key={day.id}>
							<Link to={"/day/" + day.day}>day {day.day}</Link>
						</li>
					)
				})
			}
		</ul>
	);
}

export default Daylist;
