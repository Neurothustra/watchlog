import React, { useState } from 'react';
import { omdbSearch } from '../../common/services/SearchService';
import { IMovieProfile } from '../../common/models/IMovieProfile';
import './AddMovie.css';

const AddMovie: React.FC = () => {
	let movieProfile: IMovieProfile = {} as IMovieProfile;
	const [searchResult, setSearchResult] = useState(movieProfile);
	const [titleInput, setTitleInput] = useState('');
	const [yearInput, setYearInput] = useState('');

	const handleTitleOnChange = (event: any) => {
		setTitleInput(event.target.value);
	};

	const handleYearOnChange = (event: any) => {
		setYearInput(event.target.value);
	};

	const handleOnClick = () => {
		if (!titleInput) {
			console.log('Search cannot be empty');
		} else if (yearInput) {
			omdbSearch(titleInput, yearInput)?.then((res) => setSearchResult(res));
		} else {
			omdbSearch(titleInput)?.then((res) => setSearchResult(res));
		}
	};

	const handleEnterKeyDown = (event: any) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleOnClick();
		}
	};

	const renderResults = () => {
		if (searchResult && searchResult.Error) {
			return <div>{searchResult.Error}</div>;
		} else {
			return (
				<div>
					{searchResult.Title} {searchResult.Year}
				</div>
			);
		}
	};

	document.addEventListener('keydown', handleEnterKeyDown);

	return (
		<>
			<h1>Add Movie</h1>
			<form noValidate>
				<input id='search-title' type={'text'} title='search-title' placeholder='title (required)' onChange={handleTitleOnChange} required></input>
				<input id='search-year' type={'text'} title='search-year' placeholder='year' onChange={handleYearOnChange}></input>
				<button type='button' onClick={handleOnClick}>
					Search
				</button>
			</form>
			{renderResults()}
		</>
	);
};

export default AddMovie;
