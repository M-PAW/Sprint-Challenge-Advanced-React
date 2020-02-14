import React from 'react';
import { render, fireEvent, findAllByTestId } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Players from './Players';

test ('Player name, country, and searches are rendered', () => {
    const { getByText } = render(<Players />)

    getByText(/Player/)

})

test ('Player name, country, and searches are rendered', () => {
    const  display = render(<Players />)
    
    display.getByText(/Country/)

})

test ('Player name, country, and searches are rendered', () => {
    const { getByText } = render(<Players />)

    getByText(/Searches/)
})