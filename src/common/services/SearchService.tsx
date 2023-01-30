const movieSearch = (titleReq: string, yearReq?: string) => {
	try {
		let searchResult;
		const omdbKey = process.env.REACT_APP_OMDB_KEY;
		const titleSearch = `t=${titleReq}`;
		const yearSearch = `y=${yearReq}`;
		const titleUrl = `http://www.omdbapi.com/?${titleSearch}&apikey=${omdbKey}`;
		const titleYearUrl = `http://www.omdbapi.com/?${titleSearch}&${yearSearch}&apikey=${omdbKey}`;

		if (titleReq && !yearReq) {
			const url = titleUrl;

			searchResult = getData(url);

			return searchResult;
		} else if (titleReq && yearReq) {
			const url = titleYearUrl;

			searchResult = getData(url);

			return searchResult;
		} else {
			searchResult = 'No record found';
		}
	} catch (error) {
		console.log('Error in movie search:\n', error);
	}
};

const getData = (req: string) => {
	const data = fetch(req).then((res) => res.json());

	return data;
};
export { movieSearch };
