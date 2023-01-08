import { useEffect, useState } from "react";

function useFetch(url) {
	let [data, setData] = useState([]);
	useEffect(() => {
		fetch(url)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setData(data);
			});
	}, [url]);
	return data;
}

export default useFetch;
