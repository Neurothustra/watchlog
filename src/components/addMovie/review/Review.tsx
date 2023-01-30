import React from 'react';
import './Review.css';

interface IReviewData {
	data: any;
}

const Review: React.FC<IReviewData> = ({ data: movieData }) => {

    return (
		<>
			<div>{movieData.Director}</div>
		</>
	);
};

export default Review;
