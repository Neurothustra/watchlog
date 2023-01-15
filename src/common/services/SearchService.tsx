const omdbSearch = (titleReq: string, yearReq?: string) => {
	try {
		let searchResult;
		const omdbKey = process.env.REACT_APP_OMDB_KEY;
		const titleSearch = `t=${titleReq}`;
		const yearSearch = `y=${yearReq}`;

		if (titleReq && !yearReq) {
			const url = `http://www.omdbapi.com/?${titleSearch}&apikey=3e344782`;

			searchResult = getData(url);

			return searchResult;
		} else if (titleReq && yearReq) {
			const url = `http://www.omdbapi.com/?${titleSearch}&${yearSearch}&apikey=3e344782`;

			searchResult = getData(url);

			return searchResult;
		} else {
			searchResult = 'No record found';
		}
	} catch (error) {
		console.log('Error in omdbSearch:\n', error);
	}
};

const getData = (req: string) => {
	const data = fetch(req).then((res) => res.json());

	return data;
};
export { omdbSearch };
