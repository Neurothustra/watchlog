import React, { useEffect, useState } from 'react';
import { omdbSearch } from '../../common/Search';
import { IMovieProfile } from '../../common/models/IMovieProfile';
import './AddMovie.css';

const AddMovie: React.FC = () => {
	let movieProfile: IMovieProfile = {} as IMovieProfile;

	const [searchResult, setSearchResult] = useState(movieProfile);

	useEffect(() => {
		omdbSearch('Friday the 13th')?.then((res) => setSearchResult(res));
		console.log(searchResult);
	}, [searchResult]);

	return (
		<>
			<h1>Add Movie</h1>
			<form noValidate autoComplete='off'>
				{/* <TextField id='search' label='Movie Search' variant='outlined'></TextField> */}
				<input id='search' type={'text'} title='movie search' placeholder='search by title'></input>
			</form>
			<p>
				{searchResult.Title} {searchResult.Year}
			</p>
		</>
	);
};

export default AddMovie;
