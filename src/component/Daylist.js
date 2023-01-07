import { useState } from "react";
import data from '../db/data.json'

function Daylist() {
	return (
		<ul className="list_day" >
			{
				data.days.map(day => {
					return (
						<li key={day.id}><a href="">Day {day.day}</a></li>
					)
				})
			}
		</ul>

	);
}

export default Daylist;
