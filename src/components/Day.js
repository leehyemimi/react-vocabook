import { useParams } from "react-router-dom";
//import data from '../db/data.json'
import Word from "./Word";
import useFetch from "./../hooks/useFetch";

function Day() {
	const { day } = useParams();
	const data = useFetch(`http://localhost:3001/words?day=${day}`)
	//const wordList = data.words.filter(word => word.day === Number(day));

	return (
		<table>
			<tbody>
				<tr>
					<td></td>
					<td>영어</td>
					<td>뜻</td>
					<td></td>
				</tr>
				{
					data.map(word => {
						return (
							<Word key={word.id} word={word} />
						)
					})
				}

			</tbody>
		</table>
	);
}

export default Day;
