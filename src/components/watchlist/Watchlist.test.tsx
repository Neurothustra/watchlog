import React from 'react';
import { render } from '@testing-library/react';
import Watchlist from './Watchlist';

describe('<Watchlist />', () => {
	test('renders without crashing', () => {
		render(<Watchlist />);
	});
});
