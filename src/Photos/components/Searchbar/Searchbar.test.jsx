import { render } from '@testing-library/react';
import React from 'react';
import Searchbar from './Searchbar';

describe('Searchbar', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Searchbar {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Searchbar')).toBeTruthy();
    });
});
