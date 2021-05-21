import { render } from '@testing-library/react';
import React from 'react';
import SearchForm  from './SearchForm ';

describe('SearchForm ', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<SearchForm  {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('SearchForm ')).toBeTruthy();
    });
});
