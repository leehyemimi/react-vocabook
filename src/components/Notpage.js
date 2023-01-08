import { Link } from "react-router-dom";

function Notpage() {
	return (
		<div>
			잘못된 경로 입니다.
			<br /><br />
			<Link to="/">돌아가기</Link>
		</div>
	);
}

export default Notpage;
