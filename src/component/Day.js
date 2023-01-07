import { useParams } from "react-router-dom";
import data from '../db/data.json'

function Day() {
	let { id } = useParams();
	const day = 1;
	const wordList = data.words.filter(word =>
		(word.day === day)
	)
	return (
		<table>
			<tbody>
				<tr>
					<td>단어</td>
					<td>뜻</td>
				</tr>
				{
					wordList.map(word => {
						return (
							<tr key={word.id}>
								<td>{word.eng}</td>
								<td>{word.kor}</td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
	);
}

export default Day;
