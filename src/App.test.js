import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render react link', () => {
    const { getByText } = render(<App/>);
    const linkElement = getByText(/test/);
    expect(linkElement).toBeInTheDocument();
})