import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

describe('<Review />', () => {
	const mockData = { Title: 'Title', Description: 'Description', Author: 'Author' };

	test('renders without crashing', () => {
		render(<Review data={mockData} />);
	});
});
