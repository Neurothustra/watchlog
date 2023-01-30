import React from 'react';
import { render } from '@testing-library/react';
import AddMovie from './AddMovie';

describe('<AddMovie />', () => {
	test('renders without crashing', () => {
		render(<AddMovie />);
	});

    test('return error for search results', () => {
        
    });
});
