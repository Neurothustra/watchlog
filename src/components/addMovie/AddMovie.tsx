import React, { useState } from 'react';
import { movieSearch } from '../../common/services/SearchService';
import { IMovieProfile } from '../../common/models/IMovieProfile';
import Review from './review/Review';
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

	const handleSearch = () => {
		if (!titleInput) {
			console.log('Search cannot be empty');
		} else if (yearInput) {
			movieSearch(titleInput, yearInput)?.then((res) => setSearchResult(res));
		} else {
			movieSearch(titleInput)?.then((res) => setSearchResult(res));
		}
	};

	const handleEnterKeyDown = (event: any) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSearch();
		}
	};

	const handleAddItem = () => {};

	const handleRemoveItem = () => {};

	const renderResults = () => {
		if (searchResult && searchResult.Error) {
			return <div>{searchResult.Error}</div>;
		} else {
			return (
				<div>
					<div className='search-result'>
						<div className='result-image'>
							<img src={searchResult.Poster} alt='' />
						</div>
						<div className='result-details'>
							{searchResult.Year} {searchResult.Genre} <br />
							Director: {searchResult.Director}
						</div>
						<div className='result-actions'>
							<div className='result-action-item'>
								<button type='button' onClick={handleAddItem}>
									Add Item
								</button>
							</div>
							<div className='result-action-item'>
								<button type='button' onClick={handleRemoveItem}>
									Remove Item
								</button>
							</div>
						</div>
					</div>
					<div className='review'>
						<Review data={searchResult} />
					</div>
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
				<button type='button' onClick={handleSearch}>
					Search
				</button>
			</form>
			{renderResults()}
		</>
	);
};

export default AddMovie;
