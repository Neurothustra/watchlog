const omdbSearch = (req: string) => {
	try {
		let searchResult;

		if (req) {
			const omdbKey = process.env.REACT_APP_OMDB_KEY;
			let titleSearch = `t=${req}`;
			const url = `http://www.omdbapi.com/?${titleSearch}&apikey=${omdbKey}`;

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
