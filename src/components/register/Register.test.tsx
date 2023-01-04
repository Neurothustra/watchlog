import React from 'react';
import { render } from '@testing-library/react';
import Register from './Register';

describe('<Register />', () => {
	test('renders without crashing', () => {
		render(<Register />);
	});
});
